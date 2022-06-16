import { categoryListItems } from './categoryListItems';

import {
  MdPhotoFilter,
  MdOutlinePortrait,
  MdOutlineComment,
  MdSettingsSuggest,
} from 'react-icons/md';

export const blogListItems = (S, context) => [
  S.documentTypeListItem('post').title('Posts').icon(MdPhotoFilter),
  S.listItem()
    .title('Authors')
    .icon(MdOutlinePortrait)
    .child(
      S.documentList()
        .title('Authors')
        .filter(`_type == 'person' && isAuthor`)
        .canHandleIntent(S.documentTypeList('person').getCanHandleIntent())
    ),
  S.documentTypeListItem('comment').title('Comments').icon(MdOutlineComment),
  S.divider(),
  ...categoryListItems(S, context),
  S.divider(),
  S.listItem()
    .title('Site Settings')
    .icon(MdSettingsSuggest)
    .child(
      S.document().schemaType('siteSettings').documentId('blogSiteSettings')
    ),
];

export const blogDesk = (S, context) =>
  S.list()
    .title('Blog')
    .items([...blogListItems(S)]);
