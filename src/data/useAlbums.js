import useDataFetch from './useDataFetch';

const ClaritaHost = 'http://localhost:8000';

const useAlbums = () => {
  const [state, _] = useDataFetch(ClaritaHost + '/api/v1/albums', []);
  return {
    albums: state.data,
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  };
};

export default useAlbums;
