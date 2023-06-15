package com.github.simohin.portfolio.backend.config

import com.github.simohin.portfolio.backend.model.AuthProvider
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration

typealias AuthProviderToIdpMap = Map<AuthProvider, String>

@ConfigurationProperties(prefix = "idp")
data class IdpProperties(
    val ids: AuthProviderToIdpMap,
)

@Configuration
@EnableConfigurationProperties(IdpProperties::class)
class IdpConfiguration
