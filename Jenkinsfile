pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    triggers {
        pollSCM('5 * * * *')
    }

    stages {
        stage('Build and Test') {
            steps {
                sh 'mvn clean install'
            }
        }
    }
}