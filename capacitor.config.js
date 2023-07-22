const { CapacitorConfig } = require('@capacitor/cli');

const config = {
  appId: 'io.ionic.starter',
  appName: 'spendwise',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

module.exports = config;
