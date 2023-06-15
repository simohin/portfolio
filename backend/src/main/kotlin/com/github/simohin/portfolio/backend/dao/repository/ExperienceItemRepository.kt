package com.github.simohin.portfolio.backend.dao.repository

import com.github.simohin.portfolio.backend.dao.model.ExperienceItem
import org.springframework.data.r2dbc.repository.Query
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import org.springframework.stereotype.Repository
import reactor.core.publisher.Flux
import java.util.UUID

@Repository
interface ExperienceItemRepository : ReactiveCrudRepository<ExperienceItem, UUID> {
    @Query("select i.* from experience_item i")
    fun getAll(): Flux<ExperienceItem>
}
