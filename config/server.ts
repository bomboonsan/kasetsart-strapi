export default ({ env }) => ({
  host: '0.0.0.0',
  port: 1338,
  /**
   * สำคัญ: ให้ Strapi สร้าง absolute URL และ asset ใต้ prefix /strapi
   * เช่น https://domain/strapi/admin
   */
  url: env('URL_STRAPI_PUBLIC') || 'http://localhost:1338/strapi',
  app: { keys: env.array('APP_KEYS') },
});
