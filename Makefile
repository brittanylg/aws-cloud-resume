.PHONY: build

build:
	sam build

deploy-infra:
	sam deploy

deploy-s3:
	aws s3 sync ./app/build/ s3://brittanylg.com
