pipeline {
  agent {
    node { label 'docker-host' }
  }

  triggers {
        issueCommentTrigger('[^>]*@eea-jenkins.*build.*')
  }

  environment {
    GIT_NAME = "volto-eea-design-system"
    NAMESPACE = "@eeacms"
    SONARQUBE_TAGS = "volto.eea.europa.eu,www.eea.europa.eu-ims,demo-www.eea.europa.eu,prod-www.eea.europa.eu,climate-adapt.eea.europa.eu,climate-advisory-board.devel4cph.eea.europa.eu,climate-advisory-board.europa.eu,www.eea.europa.eu-en"
    DEPENDENCIES = ""
    BACKEND_PROFILES = "eea.kitkat:testing"
    BACKEND_ADDONS = ""
    VOLTO = "16"
    IMAGE_NAME = BUILD_TAG.toLowerCase()
  }

  stages {
    stage('Release') {
      when {
        allOf {
          environment name: 'CHANGE_ID', value: ''
          branch 'master'
        }
      }
      steps {
        node(label: 'docker') {
          withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN'), string(credentialsId: 'eea-jenkins-npm-token', variable: 'NPM_TOKEN')]) {
            sh '''docker run -i --rm --pull always --name="$IMAGE_NAME-gitflow-master" -e GIT_BRANCH="$BRANCH_NAME" -e GIT_NAME="$GIT_NAME" -e GIT_TOKEN="$GITHUB_TOKEN" -e NPM_TOKEN="$NPM_TOKEN" -e LANGUAGE=javascript eeacms/gitflow'''
          }
        }
      }
    }

    stage('Check if testing needed') {
      when {
        allOf {
          not { branch 'master' }
          not { branch 'develop' }
          environment name: 'CHANGE_ID', value: ''
        }
      }
      steps {
        script {
            withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN')]) {
              check_result = sh script: '''docker run --pull always -i --rm --name="$IMAGE_NAME-gitflow-check" -e GIT_TOKEN="$GITHUB_TOKEN" -e GIT_BRANCH="$BRANCH_NAME" -e GIT_ORG="$GIT_ORG" -e GIT_NAME="$GIT_NAME" eeacms/gitflow /check_if_testing_needed.sh''', returnStatus: true

              if (check_result == 0) {
                env.SKIP_TESTS = 'yes'
              }
            }
        }
      }
    }

    stage('Testing') {
      when {
        anyOf {
          allOf {
            not { environment name: 'CHANGE_ID', value: '' }
            environment name: 'CHANGE_TARGET', value: 'develop'
            environment name: 'SKIP_TESTS', value: ''
            environment name: 'GITHUB_COMMENT', value: ''
          }
          allOf {
            environment name: 'CHANGE_ID', value: ''
            anyOf {
              not { changelog '.*^Automated release [0-9\\.]+$' }
              branch 'master'
            }
            environment name: 'SKIP_TESTS', value: ''
          }
        }
      }
      stages {
        stage('Build test image') {
          steps {
            checkout scm
            sh '''docker build --pull --build-arg="VOLTO_VERSION=$VOLTO" --build-arg="ADDON_NAME=$NAMESPACE/$GIT_NAME"  --build-arg="ADDON_PATH=$GIT_NAME" . -t $IMAGE_NAME-frontend'''
          }
        }
        
        stage('Fix code') {
          when {
              environment name: 'CHANGE_ID', value: ''
              not { branch 'master' }
          }
          steps {
            script {
              fix_result = sh(script: '''docker run --name="$IMAGE_NAME-fix" --entrypoint=make --workdir=/app/src/addons/$GIT_NAME  $IMAGE_NAME-frontend ci-fix''', returnStatus: true)
              sh '''docker cp $IMAGE_NAME-fix:/app/src/addons/$GIT_NAME/src .'''
              sh '''docker rm -v $IMAGE_NAME-fix'''
              FOUND_FIX = sh(script: '''git diff | wc -l''', returnStdout: true).trim()

              if (FOUND_FIX != '0') {
                withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN')]) {
                  sh '''sed -i "s|url = .*|url = https://eea-jenkins:$GITHUB_TOKEN@github.com/eea/$GIT_NAME.git|" .git/config'''
                }
                sh '''git fetch origin $GIT_BRANCH:$GIT_BRANCH'''
                sh '''git checkout $GIT_BRANCH'''
                sh '''git add src/'''
                sh '''git commit -m "style: Automated code fix" '''
                sh '''git push --set-upstream origin $GIT_BRANCH'''
                sh '''exit 1'''
              }
            }
          }
        }

        stage('ES lint') {
          steps {
            sh '''docker run --rm --name="$IMAGE_NAME-eslint" --entrypoint=make --workdir=/app/src/addons/$GIT_NAME $IMAGE_NAME-frontend lint'''
          }
        }

        stage('Style lint') {
          steps {
            sh '''docker run --rm --name="$IMAGE_NAME-stylelint" --entrypoint=make --workdir=/app/src/addons/$GIT_NAME  $IMAGE_NAME-frontend stylelint'''
          }
        }

        stage('Prettier') {
          steps {
            sh '''docker run --rm --name="$IMAGE_NAME-prettier" --entrypoint=make --workdir=/app/src/addons/$GIT_NAME  $IMAGE_NAME-frontend prettier'''
          }
        }

        stage('Coverage Tests') {
          parallel {
            
            stage('Unit tests') {
              steps {
                script {
                  try {
                    sh '''docker run --name="$IMAGE_NAME-volto" --entrypoint=make --workdir=/app/src/addons/$GIT_NAME $IMAGE_NAME-frontend test-ci'''
                    sh '''rm -rf xunit-reports'''
                    sh '''mkdir -p xunit-reports'''
                    sh '''docker cp $IMAGE_NAME-volto:/app/coverage xunit-reports/'''
                    sh '''docker cp $IMAGE_NAME-volto:/app/junit.xml xunit-reports/'''
                    publishHTML(target : [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'xunit-reports/coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'UTCoverage',
                    reportTitles: 'Unit Tests Code Coverage'
                  ])
                } finally {
                    catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                        junit testResults: 'xunit-reports/junit.xml', allowEmptyResults: true
                    }
                    sh script: '''docker rm -v $IMAGE_NAME-volto''', returnStatus: true
                  }
                }
              }
            }
            
            stage('Integration tests') {
              steps {
                script {
                  try {
                    sh '''docker run --pull always --rm -d --name="$IMAGE_NAME-plone" -e SITE="Plone" -e PROFILES="$BACKEND_PROFILES" -e ADDONS="$BACKEND_ADDONS" eeacms/plone-backend'''
                    sh '''timeout -s 9 3600 docker run --shm-size=2g --cpu-quota=150000 --link $IMAGE_NAME-plone:plone --entrypoint=make --name="$IMAGE_NAME-cypress" --workdir=/app/src/addons/${GIT_NAME} -e "RAZZLE_INTERNAL_API_PATH=http://plone:8080/Plone" $IMAGE_NAME-frontend cypress-ci'''
                  } finally {
                    try {
                      sh '''rm -rf cypress-videos cypress-results cypress-coverage cypress-screenshots'''
                      sh '''mkdir -p cypress-videos cypress-results cypress-coverage cypress-screenshots'''
                      videos = sh script: '''docker cp $IMAGE_NAME-cypress:/app/src/addons/$GIT_NAME/cypress/videos cypress-videos/''', returnStatus: true
                      sh '''docker cp $IMAGE_NAME-cypress:/app/src/addons/$GIT_NAME/cypress/reports cypress-results/'''
                      screenshots = sh script: '''docker cp $IMAGE_NAME-cypress:/app/src/addons/$GIT_NAME/cypress/screenshots cypress-screenshots''', returnStatus: true

                      archiveArtifacts artifacts: 'cypress-screenshots/**', fingerprint: true, allowEmptyArchive: true

                      coverage = sh script: '''docker cp $IMAGE_NAME-cypress:/app/src/addons/$GIT_NAME/coverage cypress-coverage''', returnStatus: true

                      if ( coverage == 0 ) {
                        publishHTML(target : [allowMissing: false,
                             alwaysLinkToLastBuild: true,
                             keepAll: true,
                             reportDir: 'cypress-coverage/coverage/lcov-report',
                             reportFiles: 'index.html',
                             reportName: 'CypressCoverage',
                             reportTitles: 'Integration Tests Code Coverage'])
                      }
                      if ( videos == 0 ) {
                        sh '''for file in $(find cypress-results -name *.xml); do if [ $(grep -E 'failures="[1-9].*"' $file | wc -l) -eq 0 ]; then testname=$(grep -E 'file=.*failures="0"' $file | sed 's#.* file=".*\\/\\(.*\\.[jsxt]\\+\\)" time.*#\\1#' );  rm -f cypress-videos/videos/$testname.mp4; fi; done'''
                        archiveArtifacts artifacts: 'cypress-videos/**/*.mp4', fingerprint: true, allowEmptyArchive: true
                      }
                    } finally {
                      catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                        junit testResults: 'cypress-results/**/*.xml', allowEmptyResults: true
                      }
                      sh script: "docker stop $IMAGE_NAME-plone", returnStatus: true
                      sh script: "docker rm -v $IMAGE_NAME-plone", returnStatus: true
                      sh script: "docker rm -v $IMAGE_NAME-cypress", returnStatus: true
                    }
                  }
                }
              }
            }
          }
        }
      }
      post {
        always {
            sh script: "docker rmi $IMAGE_NAME-frontend", returnStatus: true
        }
      }
    }

    stage('Report to SonarQube') {
      when {
        anyOf {
          allOf {
            not { environment name: 'CHANGE_ID', value: '' }
            environment name: 'GITHUB_COMMENT', value: ''
            environment name: 'CHANGE_TARGET', value: 'develop'
          }
          allOf {
            environment name: 'CHANGE_ID', value: ''
            anyOf {
              allOf {
                branch 'develop'
                not { changelog '.*^Automated release [0-9\\.]+$' }
              }
              branch 'master'
            }
          }
        }
      }
      steps {
        script {
          def scannerHome = tool 'SonarQubeScanner'
          def nodeJS = tool 'NodeJS'
          withSonarQubeEnv('Sonarqube') {
            sh '''sed -i "s#/app/src/addons/${GIT_NAME}/##g" xunit-reports/coverage/lcov.info'''
            sh '''sed -i "s#src/addons/${GIT_NAME}/##g" xunit-reports/coverage/lcov.info'''
            sh "export PATH=${scannerHome}/bin:${nodeJS}/bin:$PATH; sonar-scanner -Dsonar.javascript.lcov.reportPaths=./xunit-reports/coverage/lcov.info,./cypress-coverage/coverage/lcov.info -Dsonar.sources=./src -Dsonar.projectKey=$GIT_NAME-$BRANCH_NAME -Dsonar.projectVersion=$BRANCH_NAME-$BUILD_NUMBER"
            sh '''try=5; while [ \$try -gt 0 ]; do curl -s -XPOST -u "${SONAR_AUTH_TOKEN}:" "${SONAR_HOST_URL}api/project_tags/set?project=${GIT_NAME}-${BRANCH_NAME}&tags=${SONARQUBE_TAGS},${BRANCH_NAME}" > set_tags_result; if [ \$(grep -ic error set_tags_result ) -eq 0 ]; then try=0; else cat set_tags_result; echo "... Will retry"; sleep 15; try=\$(( \$try - 1 )); fi; done'''
          }
        }
      }
    }

    stage('SonarQube compare to master') {
      when {
        anyOf {
          allOf {
            not { environment name: 'CHANGE_ID', value: '' }
            environment name: 'GITHUB_COMMENT', value: ''
            environment name: 'CHANGE_TARGET', value: 'develop'
          }
          allOf {
            environment name: 'CHANGE_ID', value: ''
            branch 'develop'
            not { changelog '.*^Automated release [0-9\\.]+$' }
          }
        }
      }
      steps {
        script {
          sh '''echo "Error" > checkresult.txt'''
          catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
            sh '''set -o pipefail; docker run -i --rm --pull always --name="$IMAGE_NAME-gitflow-sn" -e GIT_BRANCH="$BRANCH_NAME" -e GIT_NAME="$GIT_NAME" eeacms/gitflow /checkSonarqubemaster.sh | grep -v "Found script" | tee checkresult.txt'''
          }

          publishChecks name: 'SonarQube', title: 'Sonarqube Code Quality Check', summary: 'Quality check on the SonarQube metrics from branch develop, comparing it with the ones from master branch. No bugs are allowed',
                        text: readFile(file: 'checkresult.txt'), conclusion: "${currentBuild.currentResult}",
                        detailsURL: "${env.BUILD_URL}display/redirect"
        }
      }
    }

    
   stage('Pull Request COMMENT') {
      when {
        not { environment name: 'CHANGE_ID', value: '' }
        not { environment name: 'GITHUB_COMMENT', value: '' }

      }


     parallel {
       stage('Docusaurus') {
           when {
            expression {
              env.GITHUB_COMMENT.contains("@eea-jenkins build all") || env.GITHUB_COMMENT.contains("@eea-jenkins build doc")
              }
           }


          steps {
            node(label: 'docker') {

              script {
                  checkout scm
                  env.NODEJS_HOME = "${tool 'NodeJS'}"
                  env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

                  sh '''sed -i "s#url:.*#url: 'https://ci.eionet.europa.eu/',#" website/docusaurus.config.js'''
                  sh '''BASEURL="$(echo $BUILD_URL | sed 's#https://ci.eionet.europa.eu##')${GIT_NAME}/"; sed -i "s#baseUrl:.*#baseUrl: '$BASEURL',#" website/docusaurus.config.js'''
                  def RETURN_STATUS = sh(script: '''cd website; yarn;yarn build''', returnStatus: true)
                  if ( RETURN_STATUS == 0 ) {
                         publishHTML (target : [allowMissing: false,
                                   alwaysLinkToLastBuild: true,
                                   keepAll: true,
                                   reportDir: 'docs',
                                   reportFiles: 'docs/intro/index.html',
                                   reportName: "${GIT_NAME}",
                                   reportTitles: 'Docusaurus'])

                         pullRequest.comment("### :heavy_check_mark: Docusaurus:\n${BUILD_URL}${GIT_NAME}/\n\n:rocket: @${GITHUB_COMMENT_AUTHOR}")
                    }
                    else {
                          pullRequest.comment("### :x: Docusaurus build FAILED\nCheck ${BUILD_URL} for details\n\n:fire: @${GITHUB_COMMENT_AUTHOR}")
                          currentBuild.result = 'FAILURE'
                          error("Docusaurus build FAILED")
                    }

              }
             }
           }


          }


       stage('Storybook') {
           when {
            expression {
              env.GITHUB_COMMENT.contains("@eea-jenkins build all") || env.GITHUB_COMMENT.contains("@eea-jenkins build story")
              }
           }

          steps {
            node(label: 'docker') {
              script {
                  env.NODEJS_HOME = "${tool 'NodeJS'}"
                  env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

                  sh '''rm -rf eea-storybook'''

                  sh '''git clone --branch develop https://github.com/eea/eea-storybook.git'''

                  withCredentials([string(credentialsId: 'eea-storybook-chromatica', variable: 'CHROMATICA_TOKEN')]) {
                    def RETURN_STATUS = sh(script: '''cd eea-storybook; npm install -g mrs-developer chromatic; yarn cache clean; make develop; cd src/addons/$GIT_NAME; git fetch origin pull/${CHANGE_ID}/head:PR-${CHANGE_ID}; git checkout PR-${CHANGE_ID}; cd ../../..; yarn install; yarn build-storybook; if [ $? -eq 0 ]; then set -o pipefail; npx chromatic --no-interactive --exit-zero-on-changes --project-token=$CHROMATICA_TOKEN -d docs/ | tee chromatic.log; else exit 1; fi''', returnStatus: true)
                    if ( RETURN_STATUS == 0 ) {
                      def STORY_URL = sh(script: '''grep "View your Storybook" eea-storybook/chromatic.log | sed "s/.*https/https/" ''', returnStdout: true).trim()
                      pullRequest.comment("### :heavy_check_mark: Storybook:\n${STORY_URL}\n\n:rocket: @${GITHUB_COMMENT_AUTHOR}")
                    }
                    else {
                       pullRequest.comment("### :x: Storybook build FAILED\nCheck ${BUILD_URL} for details\n\n:fire: @${GITHUB_COMMENT_AUTHOR}")
                       currentBuild.result = 'FAILURE'
                       error("Storybook build FAILED")
                    }
                   }
                   sh '''rm -rf eea-storybook'''
              }
             }
          }
       }


      }
    }

    stage('Pull Request') {
      when {
        not { environment name: 'CHANGE_ID', value: '' }
        environment name: 'GITHUB_COMMENT', value: ''
        environment name: 'CHANGE_TARGET', value: 'master'
      }
      steps {
        script {
          if (env.CHANGE_BRANCH != 'develop') {
            error 'Pipeline aborted due to PR not made from develop branch'
          }
          withCredentials([string(credentialsId: 'eea-jenkins-token', variable: 'GITHUB_TOKEN')]) {
            sh '''docker run --pull always -i --rm --name="$IMAGE_NAME-gitflow-pr" -e GIT_CHANGE_TARGET="$CHANGE_TARGET" -e GIT_CHANGE_BRANCH="$CHANGE_BRANCH" -e GIT_CHANGE_AUTHOR="$CHANGE_AUTHOR" -e GIT_CHANGE_TITLE="$CHANGE_TITLE" -e GIT_TOKEN="$GITHUB_TOKEN" -e GIT_BRANCH="$BRANCH_NAME" -e GIT_CHANGE_ID="$CHANGE_ID" -e GIT_ORG="$GIT_ORG" -e GIT_NAME="$GIT_NAME" -e LANGUAGE=javascript eeacms/gitflow'''
          }
        }
      }
    }
  }

  post {
    always {
      cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, deleteDirs: true)
    }
    changed {
      script {
        def details = """<h1>${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}</h1>
                         <p>Check console output at <a href="${env.BUILD_URL}/display/redirect">${env.JOB_BASE_NAME} - #${env.BUILD_NUMBER}</a></p>
                      """
        emailext(
        subject: '$DEFAULT_SUBJECT',
        body: details,
        attachLog: true,
        compressLog: true,
        recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'CulpritsRecipientProvider']]
        )
      }
    }
  }
}
