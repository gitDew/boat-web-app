package com.github.gitdew.boatapp.security;

import java.time.Instant;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SecurityController {

  private final JwtEncoder encoder;

  @PostMapping("/token")
  public String token(Authentication authentication) {
    Instant now = Instant.now();
    String scope = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority)
        .collect(
            Collectors.joining(" "));
    JwtClaimsSet claims = JwtClaimsSet.builder()
        .issuer("boatapp")
        .issuedAt(now)
        .expiresAt(now.plusSeconds(300L)) // 5 minutes
        .subject(authentication.getName())
        .claim("scope", scope)
        .build();
    return encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
  }
}
