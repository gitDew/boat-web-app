package com.github.gitdew.boatapp;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements ApplicationRunner {

  private final BoatRepository boatRepository;

  public void run(ApplicationArguments args) {
    boatRepository.save(new Boat(1L, "Backend Boat #1", "A boat from the database."));
    boatRepository.save(new Boat(2L, "Backend Boat #2", "Another boat from the database."));
    boatRepository.save(new Boat(3L, "Backend Boat #3", "Another boat from the database."));
    boatRepository.save(new Boat(4L, "Backend Boat #4", "Another boat from the database."));
    boatRepository.save(new Boat(5L, "Backend Boat #5", "Another boat from the database."));
    boatRepository.save(new Boat(6L, "Backend Boat #6", "Another boat from the database."));
    boatRepository.save(new Boat(7L, "Backend Boat #7", "Another boat from the database."));
    boatRepository.save(new Boat(8L, "Backend Boat #8", "Another boat from the database."));
  }
}