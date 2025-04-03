'use server'

import { Post } from '@/src/app/api/posts/types'
import Posts from '@/src/components/Posts'
import { ApiResponse } from '@/src/app/api/posts/route'
import 'react-loading-skeleton/dist/skeleton.css'

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(
    'https://api.qumiqo.com/api/posts?_limit=16&type=newest&page=1'
  )

  if (!res.ok) throw new Error('Ошибка загрузки данных')

  const data: ApiResponse = await res.json()

  return data.data
}

export default async function Home() {
  const data = await getPosts()
  return <Posts data={data} />
}
