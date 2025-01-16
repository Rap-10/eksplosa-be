module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://127.0.0.1:5500', 'https://1772-202-57-27-81.ngrok-free.app/'],
      method: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
