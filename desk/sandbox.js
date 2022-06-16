import { MdOutlineBugReport } from 'react-icons/md';

export const sandbox = async (S, context) =>
  S.list()
    .id('root')
    .title('Base')
    .items([
      S.listItem()
        .title('Sandbox')
        .icon(MdOutlineBugReport)
        .child(S.document().schemaType('sandbox').documentId('sandbox')),
    ]);
