import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

type NewsDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailsPage({
  params,
}: Readonly<NewsDetailsPageProps>) {
  const { slug } = await params
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug)

  if (!newsItem) {
    return notFound()
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date.toISOString()}>
          {newsItem.date.toISOString().split('T')[0]}
        </time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
