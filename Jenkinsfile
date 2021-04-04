//Jenkins file only to tutorial example
node {
    
  tools {nodejs "nodejs"}
    
  stages {
    echo "Staring stage Checkout..."    
    stage('Cloning Git') {
        git branch: 'main',  url: 'https://github.com/Marl0nGonzalez/Jenkins-Angular'
    }
    
    stage('Code Quality Check via SonarQube') {
      script {
          def scannerHome = tool 'sonar-scanner';
          withSonarQubeEnv("sonarqube") {
              sh "${tool("sonar-scanner")}/bin/sonar-scanner \
              -Dsonar.projectKey=pipeline-angular2 \
              -Dsonar.sources=. \
              -Dsonar.css.node=. \
              -Dsonar.host.url=http://192.168.0.105:9000 \
              -Dsonar.login=8d94c921983f8795419becc16ac71db15c52514b"
          }
       }
    }
        
    stage('Install dependencies') {
        echo "Staring Installing modules..."
        sh 'npm install'
    }

    stage("Test") {
      echo "Staring testing..."
      sh "npm run test-headless"
    }

    stage("Build") {
        echo "Staring Building..."
        sh "npm run build --prod"
    }

  }
}
