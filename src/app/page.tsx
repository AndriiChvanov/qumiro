'use server'

import { Post } from '@/src/app/api/posts/types'
import Posts from '@/src/components/Posts'

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)

  if (!res.ok) throw new Error('Ошибка загрузки данных')

  return res.json()
}

export default async function Home() {
  const data = await getPosts()
  return <Posts data={data} />
}
