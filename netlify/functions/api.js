const serverless = require("serverless-http");
const app = require("../../server");

const handler = serverless(app, {binary: ["image/png"]});
exports.handler = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // Netlify can pass either the public URL or the internal function URL.
  const path = event.path.replace(/^\/\.netlify\/functions\/api(?=\/|$)/, "") || "/";
  return handler({...event, path}, context);
};
