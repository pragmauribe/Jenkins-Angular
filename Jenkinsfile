node {
    stage('Checkout SCM') {
        //git branch: 'main', url: 'https://marlon.gonzalez@git.pragma.com.co/marlon.gonzalez/Jenkins-Angular.git'
        echo "Starting Checkout..."
    }

    stage('Install node modules') {
        echo "Starting Install node modules..."
        sh "npm install"
    }

    stage("Build") {
        echo "Starting Build..."
        sh "npm run build --dev"
    }
    
    stage("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/angular-pipeline/dist/jenkins-test/. /var/www/jenkins_test/html/"
    }
}
