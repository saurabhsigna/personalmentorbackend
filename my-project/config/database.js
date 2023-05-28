module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-chp994ak728ivvv3vdb0-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'render_10hy'),
      user: env('DATABASE_USERNAME', 'saurabhamar'),
      password: env('DATABASE_PASSWORD', '33LttMf4zx3lqkMk8QOz5M7zmnNW0GCp'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});