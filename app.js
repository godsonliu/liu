const http = require("http");

http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  }).on("end", () => {
    console.log(data);
  });
  res.end("ok");
}).listen(3000);

