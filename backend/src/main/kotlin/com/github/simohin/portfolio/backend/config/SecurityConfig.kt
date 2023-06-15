package com.github.simohin.portfolio.backend.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.security.web.server.authentication.HttpStatusServerEntryPoint
import org.springframework.web.cors.CorsConfiguration

@Configuration
@EnableWebFluxSecurity
class SecurityConfig {

    companion object {
        private val PUBLIC_PATH_PATTERNS = arrayOf("/auth/**")
    }

    @Bean
    fun filterChain(http: ServerHttpSecurity): SecurityWebFilterChain? = http
        .csrf { it.disable() }
        .cors {
            it.configurationSource {
                CorsConfiguration()
                    .applyPermitDefaultValues()
                    .apply {
                        addAllowedMethod(HttpMethod.DELETE)
                        addAllowedMethod(HttpMethod.PUT)
                    }
            }
        }
        .authorizeExchange {
            it
                .pathMatchers(*PUBLIC_PATH_PATTERNS).permitAll()
                .anyExchange().authenticated()
        }
        .oauth2ResourceServer {
            it.jwt { }
        }
        .exceptionHandling {
            it.authenticationEntryPoint(HttpStatusServerEntryPoint(HttpStatus.UNAUTHORIZED))
        }
        .build()
}
