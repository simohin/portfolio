package com.github.simohin.portfolio.backend.dao.model

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.time.LocalDate
import java.util.UUID

@Table("experience_item")
data class ExperienceItem(
    val companyTitle: String,
    val companyDescription: String,
    val positionTitle: String,
    val positionDescription: String,
    val from: LocalDate,
    val to: LocalDate? = null,
    @Id
    val id: UUID = UUID.randomUUID(),
)
