function sendContactInfoViaMail() {}

export default (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    res.statusCode = 200;
    res.json({ status: "SUCCESS" });
  } else {
    res.statusCode = 404;
  }
};
