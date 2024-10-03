package com.github.gitdew.boatapp;

import com.github.gitdew.boatapp.entities.Boat;
import com.github.gitdew.boatapp.repositories.BoatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements ApplicationRunner {

  private final BoatRepository boatRepository;

  public void run(ApplicationArguments args) {
    if (boatRepository.count() == 0) {
      boatRepository.save(new Boat(1L, "Sea Whisperer", "It's really silent."));
      boatRepository.save(new Boat(2L, "Tide Runner", "Fastest boat this side of the Atlantic."));
      boatRepository.save(new Boat(3L, "Moonlit Voyager", "Dark as night."));
      boatRepository.save(new Boat(4L, "Golden Swell", "Way too expensive."));
      boatRepository.save(new Boat(5L, "Neptune's Legacy", "It's cool, I guess."));
    }
  }
}