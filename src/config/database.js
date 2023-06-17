module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'localhost',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
