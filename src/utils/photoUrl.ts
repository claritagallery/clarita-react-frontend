function photoUrl(photoId: string, albumId?: string) {
  // "/albums/:albumId/photos/:photoId"
  if (albumId) {
    return `/albums/${albumId}/photos/${photoId}`;
  }
  // "/photos/:photoId"
  return `/photos/${photoId}`;
}

export default photoUrl;
