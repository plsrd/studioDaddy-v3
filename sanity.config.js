import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { structure } from './desk/baseStructure';

export default createConfig({
  name: 'default',
  title: 'studioDaddy',

  projectId: 'k8p6uw8a',
  dataset: 'development',

  plugins: [
    deskTool({
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
