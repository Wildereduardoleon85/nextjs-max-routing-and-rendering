export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

type MarketingLayoutProps = {
  children: React.ReactNode
}

export default function MarketingLayout({
  children,
}: Readonly<MarketingLayoutProps>) {
  return <main>{children}</main>
}
