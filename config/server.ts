export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  // ทำให้ Strapi ทำงานที่ root path ('') เสมอ
  // ไม่ต้องใช้ env var ใดๆ ทั้งสิ้น
  url: '',
  app: {
    keys: env.array('APP_KEYS'),
  },
});