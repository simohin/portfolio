package com.github.simohin.portfolio.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.reactive.config.EnableWebFlux

@SpringBootApplication
@EnableWebFlux
class BackendApplication

fun main(args: Array<String>) {
    runApplication<BackendApplication>(*args)
}
