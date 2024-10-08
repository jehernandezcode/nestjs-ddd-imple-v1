import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    node_config: {
      env: process.env.NODE_ENV,
      port:
        process.env.NODE_ENV == 'prod'
          ? process.env.HTTPS_PORT
          : process.env.HTTP_PORT,
      ssl_cert_path: process.env.SSL_CERT_PATH,
      ssl_key_path: process.env.SSL_KEY_PATH,
    },
    databases: process.env.DATABASES,
  };
});
