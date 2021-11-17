import useDataFetch from './useDataFetch';

const ClaritaHost = 'http://localhost:8000';

const useClaritaAPI = () => {
  return {
    albums: () => {
      useDataFetch(ClaritaHost + '/api/v1/albums', []);
    },
    album: (album_id) => {
      useDataFetch(`${ClaritaHost}/api/v1/album/${album_id}`, []);
    },
    photoInAlbum: (photo_id, album_id) => {
      useDataFetch(`${ClaritaHost}/api/v1/album/${album_id}/photo/${photo_id}`, []);
    },
  };
};

export default useClaritaAPI;
