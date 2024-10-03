package com.github.gitdew.boatapp.services;

import com.github.gitdew.boatapp.entities.Boat;
import com.github.gitdew.boatapp.exceptions.NotFoundException;
import com.github.gitdew.boatapp.repositories.BoatRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoatService {

  private final BoatRepository boatRepository;

  public Boat getBoat(Long id) {
    return boatRepository.findById(id).orElseThrow(NotFoundException::new);
  }

  public List<Boat> getBoats() {
    return boatRepository.findAll();
  }

  public void deleteBoat(Long id) {
    boatRepository.deleteById(id);
  }

  public Boat createBoat(Boat newBoat) {
    return boatRepository.save(newBoat);
  }

  public Boat updateBoat(Long id, Boat newBoat) {
    Boat oldBoat = this.getBoat(id);
    oldBoat.setName(newBoat.getName());
    oldBoat.setDescription(newBoat.getDescription());
    return boatRepository.save(oldBoat);
  }
}
