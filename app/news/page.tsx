import Link from 'next/link'
import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <br />
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
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
    </>
  )
}
