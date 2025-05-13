import { MainHeader } from '@/components'

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

type ContentLayoutProps = {
  children: React.ReactNode
}

export default function ContentLayout({
  children,
}: Readonly<ContentLayoutProps>) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  )
}
