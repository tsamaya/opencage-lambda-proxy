const { geocode } = require('opencage-api-client');

module.exports.geocode = async (event) => {
  try {
    const result = await geocode(event.queryStringParameters);
    // you might want to log result
    // console.log('API result is ', { result });
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    // you might want to log errors
    // console.log('Catched error is ', { error });
    //
    // Jest fetch wraps response in a response object, while real API
    // returns directly response into an object containing status
    const statusCode = error.response.status.code || error.status.code;
    const message = error.response.status.message || error.status.message;
    const result = {
      code: statusCode,
      message,
    };
    return {
      statusCode,
      body: JSON.stringify(result),
    };
  }
};
