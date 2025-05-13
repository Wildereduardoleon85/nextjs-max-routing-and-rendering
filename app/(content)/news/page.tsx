import { DUMMY_NEWS } from '@/dummy-news'
import { NewsList } from '@/components'

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <br />
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
