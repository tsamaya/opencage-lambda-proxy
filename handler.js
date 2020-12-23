const { geocode } = require('opencage-api-client');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.geocode = async (event) => {
  try {
    const result = await geocode(event.queryStringParameters);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    // log error message ? and success above ?
    // console.log(error);

    return {
      statusCode: error.status.code,
      body: JSON.stringify({
        code: error.status.code,
        message: error.status.message,
      }),
    };
  }
};
