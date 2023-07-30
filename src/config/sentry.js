export default {
  dsn: process.env.SENTRY_DSN,
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
};
