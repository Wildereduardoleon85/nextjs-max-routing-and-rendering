'use client'

type ArchiveErrorPageProps = {
  error: Error
}

export default function ArchiveErrorPage({
  error,
}: Readonly<ArchiveErrorPageProps>) {
  return (
    <div id="error">
      <h2>An Error occurred!</h2>
      <p>{error.message}</p>
    </div>
  )
}
