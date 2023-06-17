pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    triggers {
        pollSCM('5 * * * *')
    }

    stages {
        stage('Build Microservice Images') {
            steps {
                sh 'docker build -t admin-service:latest admin\Dockerfile'
                sh 'docker build -t auth-service:latest auth\Dockerfile'
                sh 'docker build -t reservation:latest reservation\Dockerfile'
            }
        }
    }
}