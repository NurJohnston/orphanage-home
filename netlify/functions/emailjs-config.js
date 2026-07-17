exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      publicKey:  process.env.EMAILJS_PUBLIC_KEY,
      serviceId:  process.env.EMAILJS_SERVICE_ID,
      templates: {
        volunteerApproved: process.env.EMAILJS_TEMPLATE_VOLUNTEER,
        sponsorFailed:     process.env.EMAILJS_TEMPLATE_SPONSOR
      }
    })
  };
};
