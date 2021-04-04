//Jenkins file only to tutorial example
pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git branch: 'main',  url: 'https://github.com/Marl0nGonzalez/Jenkins-Angular'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }      
  }
}
