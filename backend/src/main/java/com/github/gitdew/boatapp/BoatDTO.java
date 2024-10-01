package com.github.gitdew.boatapp;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoatDTO {

  private Long id;
  @NotBlank
  private String name;
  private String description;
}
