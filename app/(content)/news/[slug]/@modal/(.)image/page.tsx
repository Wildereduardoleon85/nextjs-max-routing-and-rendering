'use client'

import { DUMMY_NEWS } from '@/dummy-news'
import { notFound, useParams, useRouter } from 'next/navigation'

export default function InterceptedImagePage() {
  const { slug } = useParams()
  const router = useRouter()

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug)

  if (!newsItem) {
    return notFound()
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={handleBack} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="100%"
          />
        </div>
      </dialog>
    </>
  )
}
