/**
 * Example JSON schema to be used in validating configuration files
 */

export default {
  title: 'Example Schema',
  id: '/ExampleSchema',
  type: 'object',
  properties: {
    name: { type: 'string' },
    id: { type: 'number' }
  },
  required: ['name', 'id']
};
