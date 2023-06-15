package com.github.simohin.portfolio.backend.service

import com.github.simohin.portfolio.backend.dao.repository.ExperienceItemRepository
import org.springframework.stereotype.Service

@Service
class ExperienceService(
    private val experienceItemRepository: ExperienceItemRepository
) {

    fun getExperienceItems() = experienceItemRepository.getAll()
}
