function photoUrl(photoId: string, albumId?: string) {
  if (albumId) {
    return `/albums/${albumId}/photos/${photoId}`
  }

  return `/photos/${photoId}`
}

export default photoUrl
