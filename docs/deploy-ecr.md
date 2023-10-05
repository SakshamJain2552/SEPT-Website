# Deploying Docker Image to Amazon ECR

## ECR Registry URL - user-service
URL: 309985726257.dkr.ecr.us-east-1.amazonaws.com/user-service

## ECR Registry URL - product-service
URL: 309985726257.dkr.ecr.us-east-1.amazonaws.com/product-service

## ECR Registry URL - delivery-service
URL: 309985726257.dkr.ecr.us-east-1.amazonaws.com/delivery-service

## ECR Registry URL - mysql:
URL: 309985726257.dkr.ecr.us-east-1.amazonaws.com/mysql

## ECR Registry URL - adminer:
URL: 309985726257.dkr.ecr.us-east-1.amazonaws.com/adminer

## Sequence of Docker Commands
### Change directory accordingly for each image
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin {add_url_here}

docker build --platform linux/amd64 -t {add_url_here} .

docker push {add_url_here}

docker-compose -f docker-compose-ecr.yml up
```