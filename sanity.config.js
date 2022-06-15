import { createConfig, createPlugin } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { structure } from './desk/baseStructure';
import { singleEdits } from './desk/singleEdits';
import { MyTool } from './MyTool';

import { MdOutlinePhotoLibrary } from 'react-icons/md';

import { SetAndPublishAction } from './utils/document-actions/setAndPublishAction';

const sharedConfig = createPlugin({
  name: 'shareConfig',
  tools: deskTool({ structure }),
});

export default createConfig([
  {
    name: 'default',
    title: 'studioDaddy',

    projectId: 'k8p6uw8a',
    dataset: 'development',
    basePath: '/prod',
    plugins: [
      deskTool({
        structure,
      }),
    ],
    tools: [
      {
        name: 'the-gay-tab',
        title: 'Gay Tab',
        component: MyTool,
        icon: MdOutlinePhotoLibrary,
      },
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
        const roles = [
          { name: 'developer', title: 'Developer' },
          { name: 'designer', title: 'Designer' },
          { name: 'admin', title: 'Administrator' },
          { name: 'manager', title: 'Manager' },
        ].map(roleExample => ({
          id: 'personWithRole',
          templateId: 'personWithRole',
          type: 'initialValueTemplateItem',
          title: roleExample.title,
          parameters: { role: roleExample.name },
        }));

        return [
          ...prev.filter(
            document => !singleEdits.includes(document.templateId)
          ),
          ...roles,
        ];
      },
      actions: (prev, { schemaType }) => {
        if (singleEdits.includes(schemaType)) {
          return prev.filter(prevAction => prevAction.action == 'publish');
        }
        return [...prev, SetAndPublishAction];
      },
    },
  },
  {
    name: 'simpleDaddy',
    title: 'simpleDaddy',
    projectId: 'k8p6uw8a',
    dataset: 'development',
    basePath: '/simpleDaddy',
    plugins: [deskTool()],
    schema: {
      types: schemaTypes,
    },
  },
]);
