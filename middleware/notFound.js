const notFound = (req, res) => res.status(404).send('Route Don\'t Exist')

module.exports = notFound