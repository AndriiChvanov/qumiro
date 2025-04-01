import { NextResponse } from 'next/server'
import { Post } from './types'

interface ApiResponse {
  data: Post[]
  error?: string
}

export async function GET() {
  try {
    const res = await fetch(
      'https://api.qumiqo.com/api/posts?_limit=16&type=newest&page=1',
      { cache: 'no-store' }
    )

    const data: ApiResponse = await res.json()
    return NextResponse.json(data.data)
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
