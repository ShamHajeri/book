FROM java:21.0.1
FROM maven:3.8.6-eclipse-temurin-19-alpine

# image layer
WORKDIR /app
ADD pom.xml /app
RUN mvn verify clean --fail-never

# Image layer: with the application
COPY . /app
RUN mvn -v
RUN mvn clean install 
CMD [ "mvn","spring-boot:run" ] 