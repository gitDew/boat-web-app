package com.github.gitdew.boatapp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoatDTO {

  private Long id;
  private String name;
  private String description;
}
