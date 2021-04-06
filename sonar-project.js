const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "780adf483dc0b9b8879f4d143fcf9f0e66ddc0d4",
    options: {
      "sonar.projectName": "Sonarqube-test",
      "sonar.projectVersion": "0.0.1",
      "sonar.projectDescription": "A simple cool app to apply a SonarQube analysis",
      "sonar.projectKey": "Sonarqube:Test",
      "sonar.sources": ".",
      "sonar.inclusions": "src/**", // Entry point of your code
    },
  },
  () => {}
);
