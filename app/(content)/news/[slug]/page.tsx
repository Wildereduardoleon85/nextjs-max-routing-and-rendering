import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'
import Link from 'next/link'
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
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem.title}
            width={112}
            height={112}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date.toISOString()}>
          {newsItem.date.toISOString().split('T')[0]}
        </time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
