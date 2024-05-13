const notFound = (req, res) => res.status(404).send("404 访问路径不存在");

module.exports = notFound;
