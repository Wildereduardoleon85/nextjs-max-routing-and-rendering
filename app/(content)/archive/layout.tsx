type ArchiveLayoutProps = {
  archive: React.ReactElement
  latest: React.ReactElement
}

export default function ArchiveLayout({
  archive,
  latest,
}: Readonly<ArchiveLayoutProps>) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  )
}
