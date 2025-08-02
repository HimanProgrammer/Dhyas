// next.config.js
const i18n = {
  locales: ['en', 'mr'],
  defaultLocale: 'en',
  localeDetection: false,
};

module.exports = {
 i18n,
};

const nextConfig = {
  output: 'export', // Needed for `next export`
  images: {
    unoptimized: true, // Required if you're using <Image> and exporting statically
  },
};

module.exports = nextConfig;