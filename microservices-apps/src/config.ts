import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    node_config: {
      env: process.env.NODE_ENV,
      port: process.env.NODE_PORT,
    },
  };
});
