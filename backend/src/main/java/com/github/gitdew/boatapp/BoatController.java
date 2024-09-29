package com.github.gitdew.boatapp;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoatController {

  @GetMapping("/boats")
  List<BoatDTO> getBoats() {
    return List.of(
        BoatDTO.builder().id(1L).name("Backend Boat").description("A boat from the backend.")
            .build(),
        BoatDTO.builder().id(2L).name("Second Backend Boat")
            .description("Another boat from the backend.").build()
    );
  }
}
