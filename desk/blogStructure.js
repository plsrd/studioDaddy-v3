import { categories } from './categories';

import {
  MdLibraryBooks,
  MdPhotoFilter,
  MdOutlinePortrait,
  MdOutlineComment,
  MdSettingsSuggest,
} from 'react-icons/md';

export const blogStructure = (S, context) =>
  S.listItem()
    .title('Blog Example')
    .icon(MdLibraryBooks)
    .child(
      S.list()
        .title('Blog Example')
        .items([
          S.documentTypeListItem('post').title('Posts').icon(MdPhotoFilter),
          S.listItem()
            .title('Authors')
            .icon(MdOutlinePortrait)
            .child(
              S.documentList()
                .title('Authors')
                .filter(`_type == 'person' && isAuthor`)
                .canHandleIntent(
                  S.documentTypeList('person').getCanHandleIntent()
                )
            ),
          S.documentTypeListItem('comment')
            .title('Comments')
            .icon(MdOutlineComment),
          S.divider(),
          ...categories(S, context),
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(MdSettingsSuggest)
            .child(
              S.document()
                .schemaType('siteSettings')
                .documentId('blogSiteSettings')
            ),
        ])
    );
