const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "927968e01afec50f02704292a8bdeb3d709e09d7",
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
