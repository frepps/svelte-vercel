module.exports = (req, res) => {
  const date = new Date().toString();
  res.status(200).send('Dagens datum är: ' + date);
};
