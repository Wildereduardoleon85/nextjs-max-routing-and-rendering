import { NewsList } from '@/components'
import { getLatestNews } from '@/lib'

export default function LatestNewsPage() {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}
