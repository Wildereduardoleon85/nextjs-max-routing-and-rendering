import { NewsList } from '@/components'
import type { NewsItem } from '@/types'
import { Suspense } from 'react'

async function News() {
  const res = await fetch('http://localhost:8080/news')

  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }

  const news = (await res.json()) as NewsItem[]

  if (news.length === 0) {
    return <p>No news found.</p>
  }

  return <NewsList news={news} />
}

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <News />
      </Suspense>
    </>
  )
}
