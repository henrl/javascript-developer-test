const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return await Promise.all(
    urls.map(async (url) => {
      return await getQuote(url);
    })
  );
};

const getQuote = async (url) => {
  const res = await httpGet(url);
  const payload = JSON.parse(res.body).message;
  if (res.status === 200) {
    return {
      'Arnie Quote': payload
    };
  }
  return {
    'FAILURE': payload
  };
}

module.exports = {
  getArnieQuotes,
};
