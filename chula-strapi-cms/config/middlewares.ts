export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'],
          'script-src': ["'self'", "'unsafe-inline'", 'blob:', 'http://localhost:1337'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'],
          'connect-src': ["'self'", 'http://localhost:1337'],
          'frame-ancestors': ["'self'", 'http://localhost:3000'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
