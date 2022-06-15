import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { structure } from './desk/baseStructure';
import { singleEdits } from './desk/singleEdits';

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
    templates: [
      {
        id: 'personWithRole',
        schemaType: 'person',
        title: 'Person with Role',
        parameters: [{ name: 'role', type: 'string' }],
        value: ({ role }) => ({ role }),
      },
    ],
  },
  document: {
    newDocumentOptions: (prev, context) => {
      //   const roles = [
      //     { name: 'developer', title: 'Developer' },
      //     { name: 'designer', title: 'Designer' },
      //     { name: 'admin', title: 'Administrator' },
      //     { name: 'manager', title: 'Manager' },
      //   ].map(roleExample => ({
      //     id: 'personWithRole',
      //     templateId: 'personWithRole',
      //     type: 'initialValueTemplateItem',
      //     title: roleExample.title,
      //     parameters: { role: roleExample.name },
      //   }));

      return [
        ...prev.filter(document => !singleEdits.includes(document.templateId)),
        // ...roles,
      ];
    },
  },
});
