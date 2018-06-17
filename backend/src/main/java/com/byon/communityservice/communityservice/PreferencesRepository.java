package com.byon.communityservice.communityservice;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "preferences", path = "preferences")
public interface PreferencesRepository extends PagingAndSortingRepository<Preferences, Long> {

	List<Preferences> findByName(@Param("name") String name);

}