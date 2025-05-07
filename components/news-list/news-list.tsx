import { NewsItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

type NewsListProps = {
  news: NewsItem[]
}

export function NewsList({ news }: Readonly<NewsListProps>) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={300}
              height={300}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
