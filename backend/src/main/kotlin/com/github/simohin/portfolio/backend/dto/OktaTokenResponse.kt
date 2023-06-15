package com.github.simohin.portfolio.backend.dto

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
data class OktaTokenResponse(
    @JsonProperty("access_token")
    val accessToken: String
)
