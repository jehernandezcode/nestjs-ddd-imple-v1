import * as Joi from 'joi';

export const databaseEnvValidationSchema = Joi.object({
  DATABASES: Joi.string()
    .required()
    .custom((value, helpers) => {
      try {
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed)) {
          return helpers.error('any.invalid');
        }

        const dbSchema = Joi.object({
          name: Joi.string().required(),
          type: Joi.string()
            .valid(
              'aurora-mysql',
              'aurora-postgres',
              'better-sqlite3',
              'capacitor',
              'cockroachdb',
              'cordova',
              'expo',
              'mariadb',
              'mongodb',
              'mssql',
              'mysql',
              'nativescript',
              'oracle',
              'postgres',
              'react-native',
              'sap',
              'sqlite',
              'sqljs',
              'spanner',
            )
            .required(),
          host: Joi.string().required(),
          port: Joi.number().required(),
          username: Joi.string().required(),
          password: Joi.string().required(),
          database: Joi.string().required(),
          synchronize: Joi.boolean().required(),
          logging: Joi.boolean(),
        });

        const { error } = Joi.array().items(dbSchema).validate(parsed);
        if (error) {
          return helpers.error('any.invalid');
        }

        return value;
      } catch (e) {
        return helpers.error('any.invalid');
      }
    }, 'validate databases configuration'),
});
