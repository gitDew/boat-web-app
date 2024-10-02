package com.github.gitdew.boatapp;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoatDTO {

  private Long id;
  @NotBlank
  @Size(max = 30)
  private String name;
  @Size(max = 200)
  private String description;
}
