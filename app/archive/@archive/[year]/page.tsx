import { NewsList } from '@/components'
import { getNewsForYear } from '@/lib'

type FilteredNewsPageProps = {
  params: Promise<{ year: string }>
}

export default async function FilteredNewsPage({
  params,
}: Readonly<FilteredNewsPageProps>) {
  const { year } = await params
  const news = getNewsForYear(Number(year))

  return <NewsList news={news} />
}
