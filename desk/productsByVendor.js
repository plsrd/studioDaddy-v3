import { map } from 'rxjs/operators';

import { MdStore } from 'react-icons/md';

export const productsByVendor = (S, { client }) =>
  S.listItem()
    .title('Products by Vendor')
    .icon(MdStore)
    .child(async () =>
      client
        .fetch(`*[_type == 'product' && defined(vendor_)].vendor_`)
        .then(vendors => [...new Set(vendors)])
        .then(vendors =>
          S.list()
            .title('Products by Vendor')
            .items([
              ...vendors.map(vendor =>
                S.listItem()
                  .title(vendor)
                  .child(
                    S.documentList()
                      .title(vendor)
                      .filter('_type == "product" && vendor_ == $vendor')
                      .params({ vendor })
                  )
              ),
            ])
        )
    );
