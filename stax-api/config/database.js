module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'stax-api'), // Update here DATABASE_NAME
      user: env('DATABASE_USERNAME', '...'), // Update here DATABASE_USERNAME
      password: env('DATABASE_PASSWORD', '...'), // Update here DATABASE_PASSWORD 
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
