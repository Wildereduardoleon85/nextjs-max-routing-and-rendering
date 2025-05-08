import { NewsList } from '@/components'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib'
import Link from 'next/link'

type FilteredNewsPageProps = {
  params: Promise<{ filter?: string[] }>
}

export default async function FilteredNewsPage({
  params,
}: Readonly<FilteredNewsPageProps>) {
  const { filter } = await params

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news

  let links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear)
    links = getAvailableNewsMonths(+selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth)
    links = []
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      selectedYear &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid path.')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
