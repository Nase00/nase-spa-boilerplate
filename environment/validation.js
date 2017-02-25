import { Validator } from 'jsonschema';
import { forEach } from 'lodash';

import exampleSchema from './schemas/example';

const validator = new Validator();

const schemas = {
  exampleSchema
};

forEach(schemas, (schema) => validator.addSchema(schema, schema.id));

export default validator;
