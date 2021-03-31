node {
    stage('Checkout SCM') {
        //git branch: 'main', url: 'https://marlon.gonzalez@git.pragma.com.co/marlon.gonzalez/Jenkins-Angular.git'
        echo "Staring Checkout..."
    }

    stage('Install node modules') {
        sh "npm install"
    }

    stage("Test") {
        sh "npm run test-headless"
    }

    stage("Build") {
        sh "npm run build --prod"
    }
    
    stage("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/angular-pipeline/dist/jenkins-test/. /var/www/jenkins_test/html/"
    }
}
