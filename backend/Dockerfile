FROM eclipse-temurin:21 as build
WORKDIR /app
COPY . .
RUN ./gradlew build


FROM eclipse-temurin:21
WORKDIR /app
COPY --from=build /app/build/libs/*.jar /app/app.jar
CMD ["java", "-jar", "/app/app.jar"]
