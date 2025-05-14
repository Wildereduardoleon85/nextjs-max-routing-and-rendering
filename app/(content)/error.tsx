'use client'

function ErrorPage({ error }: { error: Error }) {
  return (
    <>
      <h1>Something went wrong.</h1>
      <p>{error.message}</p>
    </>
  )
}

export default ErrorPage
