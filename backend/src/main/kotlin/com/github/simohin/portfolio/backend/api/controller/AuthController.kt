package com.github.simohin.portfolio.backend.api.controller

import com.github.simohin.portfolio.backend.model.AuthProvider
import com.github.simohin.portfolio.backend.service.OktaService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("auth")
class AuthController(
    private val oktaService: OktaService,
) {

    @GetMapping("url")
    fun getUrl(
        @RequestParam provider: AuthProvider,
        @RequestParam("redirect-uri") redirectUri: String,
    ) = oktaService.getAuthUrl(provider, redirectUri)

    @GetMapping("token")
    fun getToken(
        @RequestParam code: String,
        @RequestParam("redirect-uri") redirectUri: String,
    ) = oktaService.getToken(code, redirectUri)
}
