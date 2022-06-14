import { blogStructure } from './blogStructure';
import { ecommerceStructure } from './ecommerceStructure';

export const structure = (S, context) =>
  S.list()
    .id('root')
    .title('Base')
    .items([blogStructure(S, context), ecommerceStructure(S, context)]);
