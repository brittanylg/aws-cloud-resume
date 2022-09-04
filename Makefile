.PHONY: build

build:
	sam build

deploy-infra:
	sam deploy

deploy-s3:
	aws s3 sync ./front-end/build/ s3://brittanylg.com
