import { categoryListItems } from './categoryListItems';

import {
  MdBedroomBaby,
  MdOutlinePortrait,
  MdSettingsSuggest,
} from 'react-icons/md';

export const portfolisListItems = S => [
  S.documentTypeListItem('project').title('Projects').icon(MdBedroomBaby),
  S.listItem()
    .title('Authors')
    .icon(MdOutlinePortrait)
    .child(
      S.documentList().title('Authors').filter(`_type == 'person' && isAuthor`)
    ),
  S.divider(),
  ...categoryListItems(S),
  S.divider(),
  S.listItem()
    .title('Site Settings')
    .icon(MdSettingsSuggest)
    .child(
      S.document()
        .schemaType('siteSettings')
        .documentId('portfolioSiteSettings')
    ),
];

export const portfolioDesk = S =>
  S.list()
    .title('Portfoliio')
    .items([...portfolisListItems(S)]);
