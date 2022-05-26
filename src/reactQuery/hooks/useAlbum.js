import { useQuery } from 'react-query';

export const useAlbum = (name, page, idAlbum, func) => {
  return useQuery([name, page, idAlbum], func);
};

