import { blogStructure } from './blogStructure';
import { ecommerceStructure } from './ecommerceStructure';
import { movieStructure } from './movieStructure';
import { portfolioStructure } from './portfolioStructure';
import { singleEdits } from './singleEdits';

import { MdCode, MdOutlineBugReport, MdOutlineViewInAr } from 'react-icons/md';

export const structure = (S, context) =>
  S.list()
    .id('root')
    .title('Base')
    .items([
      S.listItem()
        .title('Sandbox')
        .icon(MdOutlineBugReport)
        .child(S.document().schemaType('sandbox').documentId('sandbox')),
      S.listItem()
        .title('Custom Input Examples')
        .icon(MdCode)
        .child(
          S.document()
            .schemaType('allInputExamples')
            .documentId('allInputExamples')
        ),
      S.divider(),
      blogStructure(S, context),
      ecommerceStructure(S, context),
      movieStructure(S),
      portfolioStructure(S),
      S.divider(),
      S.listItem()
        .title('All')
        .icon(MdOutlineViewInAr)
        .child(
          S.list()
            .title('All')
            .items([
              ...S.documentTypeListItems().filter(
                listItem => !singleEdits.includes(listItem.getId())
              ),
            ])
        ),
    ]);
