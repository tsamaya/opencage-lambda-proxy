const { geocode } = require('opencage-api-client');

module.exports.geocode = async (event) => {
  try {
    const result = await geocode(event.queryStringParameters);
    // you might want to log result
    // console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    // you might want to log errors
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
