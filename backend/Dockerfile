FROM gradle:latest as build
WORKDIR /app
COPY . .
RUN gradle clean build


FROM eclipse-temurin:21
WORKDIR /app
COPY --from=build /app/build/libs/*.jar /app/app.jar
CMD ["java", "-jar", "/app/app.jar"]
