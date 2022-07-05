//SCRIPTED

//DECLARATIVE
pipeline {
	agent any
	// agent { docker { image 'maven:3.6.3'} }
	// agent { docker { image 'node:14.15.5'} }
	environment {
		dockerHome = tool 'myDocker'
		mavenHome = tool 'myMaven'
		PATH = "$dockerHome/bin:$mavenHome/bin:$PATH"
	}

	stages {
		stage('Checkout') {
			steps {
				sh 'mvn --version'
				sh 'docker version'
				echo "Build"
				echo "PATH - $PATH"
				echo "BUILD_NUMBER - $env.BUILD_NUMBER"
				echo "BUILD_ID - $env.BUILD_ID"
				echo "JOB_NAME - $env.JOB_NAME"
				echo "BUILD_TAG - $env.BUILD_TAG"
				echo "BUILD_URL - $env.BUILD_URL"
			}
		}
        stage('Pull Branch Dev') {
        steps {
            git branch: 'main',
                url: 'https://vinodpalleda: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@github.com/vinodpalleda/mynodeproject.git'

            sh "ls -lat"
        }
    }
   stage('NPM Install') {
        steps{
            sh 'pwd'
            sh 'sudo npm install'
            sh 'sudo npm install i -g @angular/cli'
            sh 'sudo node --version'
        }
        /*}*/
    }
	stage('Build') {
         steps{
        milestone(20)
        sh ' sudo ng build --prod --aot --outputHashing=all'
         }
    }


		stage('Build Docker Image') {
			steps {
				//"docker build -t in28min/currency-exchange-devops:$env.BUILD_TAG"
				script {
					dockerImage = docker.build("superapp_micro:${env.BUILD_TAG}")
				}

			}
		}

		stage('Push Docker Image') {
			steps {
				script {
					//docker.withRegistry('', 'newdockerhub'){
					docker.withRegistry('', 'vinoddevops7') {
						dockerImage.push();
                                                dockerImage.push('latest');
						
					}
				}
			}
		}
		 stage('Remove Unused docker image') {
                          steps{
                             sh "docker rmi $imagename:$BUILD_NUMBER"
                             sh "docker rmi $imagename:latest"

       }
   }
	} 
	
	post {
		always {
			echo 'Im awesome. I run always'
		}
		success {
			echo 'I run when you are successful'
		}
		failure {
			echo 'I run when you fail'
		}
	}
}
