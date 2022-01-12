pipeline {

    agent any
    tools { 
        nodejs 'node' 
    }

    stages {

        stage ('Build') {
            steps {
                sh 'node --version'
                sh 'npm install' 
            }
        }

        stage("travel-search-test"){
            steps{
                echo 'testing travel search tests'
                sh 'npm run test_travel'
            }
        }

        stage("checkout-test"){
            steps{
                echo 'testing checkout tests'
                sh 'npm run test_checkout'
            }
        }

    }

    post {
        always {
            cleanWs()
        }
    }
}
