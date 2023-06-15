package com.github.simohin.portfolio.backend.service

import com.github.simohin.portfolio.backend.config.IdpProperties
import com.github.simohin.portfolio.backend.dto.OktaTokenResponse
import com.github.simohin.portfolio.backend.model.AuthProvider
import com.okta.spring.boot.oauth.config.OktaOAuth2Properties
import com.okta.spring.boot.sdk.config.OktaClientProperties
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@Service
class OktaService(
    private val oktaClientProperties: OktaClientProperties,
    private val oktaOAuth2Properties: OktaOAuth2Properties,
    private val idpProperties: IdpProperties,
    clientBuilder: WebClient.Builder,
) {

    private val client = clientBuilder.baseUrl(oktaClientProperties.orgUrl).build()

    fun getAuthUrl(provider: AuthProvider, redirectUri: String) = Mono.fromCallable {
        val params = mutableMapOf(
            "client_id" to oktaOAuth2Properties.clientId,
            "redirect_uri" to redirectUri,
            "scope" to "openid",
            "response_type" to "code",
            "response_mode" to "query",
            "state" to redirectUri,
        ).apply {
            idpProperties.ids[provider]?.let { this["idp"] = it }
        }.map { "${it.key}=${it.value}" }
            .joinToString("&")

        "${oktaClientProperties.orgUrl}/oauth2/v1/authorize?$params"
    }

    fun getToken(code: String, redirectUri: String) = client.post()
        .uri("/oauth2/v1/token")
        .contentType(MediaType.APPLICATION_FORM_URLENCODED)
        .body(
            BodyInserters.fromFormData("redirect_uri", redirectUri)
                .with("grant_type", "authorization_code")
                .with("code", code)
                .with("client_id", oktaOAuth2Properties.clientId)
                .with("client_secret", oktaOAuth2Properties.clientSecret)
        ).retrieve()
        .bodyToMono(OktaTokenResponse::class.java)
}
