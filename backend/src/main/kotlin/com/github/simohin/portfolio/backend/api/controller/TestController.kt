package com.github.simohin.portfolio.backend.api.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.time.LocalDateTime

@RestController
@RequestMapping("test")
class TestController {

    @GetMapping
    fun test() = Mono.just(LocalDateTime.now())
}
