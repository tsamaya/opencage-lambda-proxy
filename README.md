# opencage-lambda-proxy

[![<circleci](https://circleci.com/gh/tsamaya/opencage-lambda-proxy.svg?style=svg)](https://app.circleci.com/pipelines/github/tsamaya/opencage-lambda-proxy)
[![codecov](https://codecov.io/gh/tsamaya/opencage-lambda-proxy/branch/main/graph/badge.svg?token=ZL3PAW0Q3R)](https://codecov.io/gh/tsamaya/opencage-lambda-proxy)

### GET STARTED

Prerequisiste :

- node 12 >

#### Signup for an API key

[Signup](https://opencagedata.com/users/sign_up) for a free API key

#### clone the repo

```bash
yarn
```

or with npm

```bash
npm install
```

#### Setup

echo "OCD_API_KEY=YOUR-API-KEY" >> .env

#### Deploy

```bash
npx serverless deploy --stage $STAGE --region $REGION
```

Example deploying to production in London region with an aws profile tsamaya

```bash
npx serverless deploy --stage production --region eu-west-2 --aws-profile tsamaya
```

### License

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
