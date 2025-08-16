module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  flags: { nps: env.bool('FLAG_NPS', true), promoteEE: env.bool('FLAG_PROMOTE_EE', true) },

  vite: {
    server: {
      host: true,
      port: env.int('PORT', 3000),
      allowedHosts: [
        env('REPLIT_HOST', 'localhost'),
        /\.replit\.dev$/,
        'localhost',
      ],
      hmr: {
        host: env('REPLIT_HOST', 'localhost'),
        protocol: 'wss',
        clientPort: 443,   // ✅ вот это ключ
      },
    },
  },
});
