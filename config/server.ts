export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url: env('URL_STRAPI_PUBLIC', 'http://localhost:1338'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
