import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { sandbox } from './desk/sandbox';
import { blogDesk } from './desk/blogStructure';
import { SetAndPublishAction } from './utils/document-actions/setAndPublishAction';
import { ecommerceDesk } from './desk/ecommerceStructure';
import { movieDesk } from './desk/movieStructure';
import { portfolioDesk } from './desk/portfolioStructure';
import { singleEdits } from './desk/singleEdits';

import {
  MdStore,
  MdLibraryBooks,
  MdOutlineBugReport,
  MdMovieFilter,
  MdOutlineViewQuilt,
} from 'react-icons/md';

export default createConfig([
  {
    name: 'default',
    title: 'studioDaddy',
    projectId: 'k8p6uw8a',
    dataset: 'development',
    basePath: '/',
    plugins: [
      deskTool({
        name: 'sandbox',
        title: 'Sanbox',
        icon: MdOutlineBugReport,
        structure: sandbox,
      }),
      deskTool({
        name: 'blog',
        title: 'Blog',
        icon: MdLibraryBooks,
        structure: blogDesk,
      }),
      deskTool({
        name: 'ecommerce',
        title: 'Ecommerce',
        icon: MdStore,
        structure: ecommerceDesk,
      }),
      deskTool({
        name: 'moviedb',
        title: 'Movie DB',
        icon: MdMovieFilter,
        structure: movieDesk,
      }),
      deskTool({
        name: 'portfolio',
        title: 'Portfolio',
        icon: MdOutlineViewQuilt,
        structure: portfolioDesk,
      }),
    ],
    tools: [],
    schema: {
      types: schemaTypes,
      templates: [],
    },
    document: {
      newDocumentOptions: (prev, context) =>
        prev.filter(document => !singleEdits.includes(document.templateId)),
      actions: (prev, { schemaType }) => {
        if (singleEdits.includes(schemaType)) {
          return prev.filter(prevAction => prevAction.action == 'publish');
        }
        return prev;
      },
    },
  },
]);
