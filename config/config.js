module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/novelistdb',
  secret: process.env.SECRET || "novelists super secrets"
};
