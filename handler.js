const { geocode } = require('opencage-api-client');

module.exports.geocode = async (event) => {
  try {
    const result = await geocode(event.queryStringParameters);
    // You might want to log result
    // console.log('API result', { result });
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    // You might want to log errors
    // console.log('Error caught', { error });
    //
    const statusCode = error.status.code;
    const { message } = error.status;
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
