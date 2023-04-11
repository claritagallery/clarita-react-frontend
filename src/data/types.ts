export type APIError = {
  message: string
} | null

export interface ListData<T> {
  next: boolean | null | string
  total: number
  results: T[]
}
export interface PhotoListItem {
  id: string
  filename: string
  name: string
  date_and_time: string
  index?: number //esto puede fallar
}

export interface AlbumListItem {
  id: string
  name: string
  date: string
}

export interface AlbumDetailItem {
  id: string
  name: string
  date: string
  description: string
  breadcrumbs: {
    id: string
    name: string
    date: string
  }[]
}

export type PhotoId = string | undefined

export type PreviousOrNext = null | PhotoListItem

type Caption = {
  language?: string
  text?: string
}

export interface PhotoData {
  id: PhotoId
  filename: string
  name: string
  date_and_time: null
  image_url: string
  caption: Caption[]
  breadcrumbs: AlbumListItem[]
  prev: PreviousOrNext
  next: PreviousOrNext
}

export type FetchPhotoInAlbumParams = {
  albumId: string
  photoId: string
}

export type fetchPhotosParams = {
  album?: string
  limit: number
}

export interface fetchAlbumsParams {
  limit: number
  parent?: string
}

export type PhotoListData = ListData<PhotoListItem>
export type AlbumDetailData = AlbumDetailItem
export type AlbumListData = ListData<AlbumListItem>
