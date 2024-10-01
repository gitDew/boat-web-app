package com.github.gitdew.boatapp;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BoatController {

  private final BoatView boatView;

  @PostMapping("/boats")
  BoatDTO createBoat(@Valid @RequestBody BoatDTO newBoat) {
    return boatView.createBoat(newBoat);
  }

  @PutMapping("/boats/{id}")
  BoatDTO updateBoat(@Valid @RequestBody BoatDTO newBoat, @PathVariable("id") Long id) {
    return boatView.updateBoat(id, newBoat);
  }

  @GetMapping("/boats")
  List<BoatDTO> getBoats() {
    return boatView.getBoats();
  }

  @GetMapping("/boats/{id}")
  BoatDTO getBoat(@PathVariable("id") Long id) {
    return boatView.getBoat(id);
  }

  @DeleteMapping("/boats/{id}")
  void deleteBoat(@PathVariable("id") Long id) {
    boatView.deleteBoat(id);
  }
}
