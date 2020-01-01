'use strict'

const usePagenation = ({ items, perPage }) => {
  const [pageNumber, setPageNumber] = React.useState(1)

  const previousPage = React.useCallback(() => {
    setPageNumber(current => current - 1)
    scroll({ top: 0, behavior: 'smooth' })
  }, [])

  const nextPage = React.useCallback(() => {
    setPageNumber(current => current + 1)
    scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return [
    items.filter((_, index) => (pageNumber - 1) * perPage < index && index <= pageNumber * perPage),
    previousPage,
    nextPage
  ]
}
