package com.github.gitdew.boatapp.repositories;

import com.github.gitdew.boatapp.entities.Boat;
import org.springframework.data.repository.ListCrudRepository;

public interface BoatRepository extends ListCrudRepository<Boat, Long> {

}
