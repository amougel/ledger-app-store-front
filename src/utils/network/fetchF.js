let fetchF;
if (process.env.NODE_ENV !== "development") {
  fetchF = fetch;
} else {
  const mockAPI = require("data/mock-api").default;
  fetchF = (uri, options) => mockAPI(uri, options) || fetch(uri, options);
}

export default fetchF;
