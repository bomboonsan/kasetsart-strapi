export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url: env('URL_PATH_PREFIX', ''),
  app: {
    keys: env.array('APP_KEYS'),
  },
});