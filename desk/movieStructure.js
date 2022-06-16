import {
  MdMovieFilter,
  MdOutlineLocalMovies,
  MdOutlinePortrait,
  MdOutlinePlayCircleOutline,
} from 'react-icons/md';

export const movieListItems = S => [
  S.documentTypeListItem('movie').title('Movies').icon(MdOutlineLocalMovies),
  S.documentTypeListItem('person').title('People').icon(MdOutlinePortrait),
  S.documentTypeListItem('screening')
    .title('Screenings')
    .icon(MdOutlinePlayCircleOutline),
];

export const movieDesk = S =>
  S.list()
    .title('Movie Database')
    .items([...movieListItems(S)]);
