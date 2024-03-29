export class APIError extends Error {}

export interface ListData<T> {
  next: boolean | null | string
  total: number
  results: T[]
}

export interface BreadcrumbItem {
  id: string
  title: string
  date: string
}

export interface PhotoListItem {
  id: string
  filename: string
  title: string
  date_and_time: string
  index?: number
}

export interface AlbumListItem {
  id: string
  title: string
  date: string
}

export interface AlbumDetailItem {
  id: string
  title: string
  date: string
  description: string
  breadcrumbs: BreadcrumbItem[]
}

export type PhotoId = string | undefined

export type PreviousOrNext = null | PhotoListItem

export interface PhotoData {
  id: PhotoId
  filename: string
  title: string
  description: string
  date_and_time: null
  image_url: string
  breadcrumbs: AlbumListItem[]
  prev: PreviousOrNext
  next: PreviousOrNext
}

export type FetchPhotoInAlbumParams = {
  albumId: string
  photoId: string
}

export type FetchPhotosParams = {
  album?: string
  limit: number
  offset?: number
}

export interface FetchAlbumsParams {
  limit: number
  parent?: string
}

export interface BaseProps {
  isLoading?: boolean
}
export type PhotoListData = ListData<PhotoListItem>
export type AlbumDetailData = AlbumDetailItem
export type AlbumListData = ListData<AlbumListItem>
