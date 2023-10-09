# Web Application Boilerplate Code

# RMIT COSC2299 SEPT Major Project

# Group Information

## Group-P8-07

## Members
* Laura Gatt - s3945256
* Lance Belen - s3944846
* Saksham Jain - s3923854
* Lawrence Dawood - s3668011
* Krisanahari Siva - s3941378

## Records

* Github repository: https://github.com/cosc2299-sept-2023/team-project-group-p8-07
* Github Project Board : https://github.com/orgs/cosc2299-sept-2023/projects/146
* Teams Link : https://teams.microsoft.com/l/channel/19%3aZYWFqHolT5UAJb-q8hjY_h-OL87wKsUMG-TcbMgVzdQ1%40thread.tacv2/General?groupId=8f496168-6600-4b77-a866-7818f47e1cca&tenantId=d1323671-cdbe-4417-b4d4-bdb24b51316b
* Additional Communications on a Private Discord Group Chat

	
  
# Run Instructions
## Run Without Docker
```bash

cd Backend
cd product-service
mvn spring-boot::run

# new shell

cd Backend
cd user-service
mvn spring-boot::run

# new shell

cd Backend
cd delivery-service
mvn spring-boot::run

# new shell

cd frontend
npm install
npm start
```

## Run Without AWS ECR
```bash
docker-compose up
```

## Run With AWS ECR
- Update AWS Credentials
- Start AWS Lab
```bash
docker-compose -f docker-compose-ecr.yml up
```

## Setup your environment 
You will need to have in your system

- Java 17.0 or higher
- Node and npm
- Apache Maven
- IDE or Editor

Other tools will be required to complete the project (e.g., Docker)

## BEANSTALK SETUP INSTRUCTIONS:

Beanstalk Implementation runs and deploys from Saksham Jain's (S3923854) Account.
```bash
- To access the files used for creating the beanstalk environment, please do: git checkout beanstalk
- To run Beanstalk, simply go to Saksham Jain (s3923854) AWS account and go to the Beanstalk service.
- Once in the Beanstalk Service, click on the environment called "inc"
- Select the environment and Restore it.
- Once the environment is restored, you can access the website by clicking on the URL link provided in the Beanstalk environment.
- Additionally, the URL is: http://inc-env.eba-bxmkgzsy.us-east-1.elasticbeanstalk.com/
- The Beanstalk Environment contains the fully functional website as can be found on the main branch.
```