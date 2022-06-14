import { categories } from './categories';
// import productsByVendor from './productsByVendor';

import {
  MdStore,
  MdShoppingBasket,
  MdOutlinePortrait,
  MdSettingsSuggest,
} from 'react-icons/md';

export const ecommerceStructure = S =>
  S.listItem()
    .title('Ecommerce Example')
    .icon(MdStore)
    .child(
      S.list()
        .title('Ecommerce Example')
        .items([
          S.documentTypeListItem('product')
            .title('Products')
            .icon(MdShoppingBasket),
          S.documentTypeListItem('vendor')
            .title('Vendors')
            .icon(MdOutlinePortrait),
          S.divider(),
          // productsByVendor,
          S.divider(),
          ...categories(S),
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(MdSettingsSuggest)
            .child(
              S.document()
                .schemaType('siteSettings')
                .documentId('ecommerceSiteSettings')
            ),
        ])
    );
