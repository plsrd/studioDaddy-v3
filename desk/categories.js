import { MdOutlinePhotoLibrary, MdOutlineImageSearch } from 'react-icons/md';

export const categories = S => [
  S.documentTypeListItem('category')
    .title('Categories')
    .icon(MdOutlinePhotoLibrary),
  S.documentTypeListItem('subcategory')
    .title('Subcategories')
    .icon(MdOutlineImageSearch),
];
