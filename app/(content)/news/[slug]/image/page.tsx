import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type ImagePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ImagePage({ params }: Readonly<ImagePageProps>) {
  const { slug } = await params

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug)

  if (!newsItem) {
    return notFound()
  }

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={1024}
        height={1024}
        priority
      />
    </div>
  )
}
