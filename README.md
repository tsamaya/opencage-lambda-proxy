# opencage-lambda-proxy

[![<circleci](https://circleci.com/gh/tsamaya/opencage-lambda-proxy.svg?style=svg)](https://app.circleci.com/pipelines/github/tsamaya/opencage-lambda-proxy)
[![codecov](https://codecov.io/gh/tsamaya/opencage-lambda-proxy/branch/main/graph/badge.svg?token=ZL3PAW0Q3R)](https://codecov.io/gh/tsamaya/opencage-lambda-proxy)

## 🔧 GET STARTED

Prerequisistes :

- [Node](https://nodejs.org/) version 12 or >
- An AWS account

### Signup for an API key

[Signup](https://opencagedata.com/users/sign_up) for a free OpenCage API key

### Clone the repo

Install the dependecies with `yarn`:

```bash
yarn install
```

or with `npm`

```bash
npm install
```

## 🔨 SETUP

### Environement file

```bash
echo "OPENCAGE_API_KEY=YOUR-API-KEY" >> .env
```

### AWS account

Deploylement will be done using an AWS profile or the usual environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

## 🚀 DEPLOY

Simply run the command

```bash
npx serverless deploy
```

it will deploy the function with default stage `dev` and default region `eu-west-1`.

And it will output

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service opencage-lambda-proxy.zip file to S3 (1.54 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............................
Serverless: Stack update finished...
Service Information
service: opencage-lambda-proxy
stage: dev
region: eu-west-1
stack: opencage-lambda-proxy-dev
resources: 11
api keys:
  None
endpoints:
  GET - https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/geocode
functions:
  geocode: opencage-lambda-proxy-dev-geocode
layers:
  None
```

The enpdpoints gives the proxy URL : `https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/geocode`

Test it with for example (updating with yours):

````bash
curl 'https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/geocode?q=lyon'
```

To deploy with a different STAGE and/or REGION please use the following command with $STAGE and $REGION according to your choice:

```bash
npx serverless deploy --stage $STAGE --region $REGION
````

As an example deploying to `production` in `London` region with an aws profile `tsamaya`:

```bash
npx serverless deploy --stage production --region eu-west-2 --aws-profile tsamaya
```

## 🗝 LICENSE

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
