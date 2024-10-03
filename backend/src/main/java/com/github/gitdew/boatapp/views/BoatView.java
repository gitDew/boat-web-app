package com.github.gitdew.boatapp.views;

import com.github.gitdew.boatapp.dtos.BoatDTO;
import com.github.gitdew.boatapp.entities.Boat;
import com.github.gitdew.boatapp.services.BoatService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoatView {

  private final BoatService boatService;

  public BoatDTO getBoat(Long id) {
    return toDTO(boatService.getBoat(id));
  }

  public List<BoatDTO> getBoats() {
    return boatService.getBoats().stream().map(this::toDTO).toList();
  }

  public BoatDTO createBoat(BoatDTO newBoat) {
    Boat newEntity = toEntity(newBoat);
    return toDTO(boatService.createBoat(newEntity));
  }

  public void deleteBoat(Long id) {
    boatService.deleteBoat(id);
  }

  private BoatDTO toDTO(Boat boat) {
    return BoatDTO.builder()
        .id(boat.getId())
        .name(boat.getName())
        .description(boat.getDescription())
        .build();
  }

  private Boat toEntity(BoatDTO dto) {
    return Boat.builder()
        .name(dto.getName())
        .description(dto.getDescription())
        .build();
  }

  public BoatDTO updateBoat(Long id, BoatDTO newBoat) {
    return toDTO(boatService.updateBoat(id, toEntity(newBoat)));
  }
}
