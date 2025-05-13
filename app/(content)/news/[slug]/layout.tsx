function NewsDetailsLayout({
  children,
  modal,
}: {
  children: React.ReactElement
  modal: React.ReactElement
}) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default NewsDetailsLayout
