import { categoryListItems } from './categoryListItems';
import { productsByVendor } from './productsByVendor';

import {
  MdShoppingBasket,
  MdOutlinePortrait,
  MdSettingsSuggest,
} from 'react-icons/md';

export const ecommerceListItems = (S, context) => [
  S.documentTypeListItem('product').title('Products').icon(MdShoppingBasket),
  S.documentTypeListItem('vendor').title('Vendors').icon(MdOutlinePortrait),
  S.divider(),
  productsByVendor(S, context),
  S.divider(),
  ...categoryListItems(S),
  S.divider(),
  S.listItem()
    .title('Site Settings')
    .icon(MdSettingsSuggest)
    .child(
      S.document()
        .schemaType('siteSettings')
        .documentId('ecommerceSiteSettings')
    ),
];

export const ecommerceDesk = (S, context) =>
  S.list()
    .title('Ecommerce')
    .items([...ecommerceListItems(S, context)]);
