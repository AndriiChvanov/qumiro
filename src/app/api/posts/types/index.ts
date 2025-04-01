export interface Author {
  _id: string
  username: string
  name: string
  title: string | null
  email: string
}

export interface Tag {
  _id: string
  name: string
}

export interface Thumbnail {
  _id: string
  mimetype: string
  extension: string
  size: number
  filename: string
  width: number
  height: number
  thumbnail: string | null
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Preview {
  _id: string
  size: string
  xCoordinate: number
  yCoordinate: number
  thumbnail: Thumbnail
}

export interface Post {
  _id: string
  author: Author
  title: string
  views: number
  categories: string[]
  preview: Preview
  commentsCount: number
  sharesCount: number
  reactionsCount: number
  likesCount: number
  classifications: string[]
  shots: string[]
  isPublished: boolean
  createdAt: string
  updatedAt: string
  allReactions: []
  tags: Tag[]
}
