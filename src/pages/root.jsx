'use strict'

const { Link } = ReactRouterDOM

const perPage = 15

const rootStyles = {
  wrapper: {
    margin: '88px 16px 100px'
  },
  title: {
    fontSize: '24px',
    margin: '0 0 16px'
  },
  shelterList: {
    margin: '0 0 32px',
    padding: 0,
    width: '100%'
  },
  shelterCard: {
    marginBottom: '16px'
  },
  pagenator: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

const Root = () => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark()
  const { location } = useGeolocation()

  const compareDistances = (a, b) =>
    Math.pow(
      Math.pow(a.latitude - location.latitude, 2) + Math.pow(a.longitude - location.longitude, 2),
      0.5
    ) -
    Math.pow(
      Math.pow(b.latitude - location.latitude, 2) + Math.pow(b.longitude - location.longitude, 2),
      0.5
    )

  const [currentShelters, previousPage, nextPage] = usePagenation({
    items: map.data.sort(compareDistances),
    perPage
  })

  return (
    <div style={rootStyles.wrapper}>
      <h1 style={rootStyles.title}>避難所リスト</h1>
      <ul style={rootStyles.shelterList}>
        {currentShelters.map(shelter => (
          <Link key={shelter.id} to={`/shelter/${shelter.id}`}>
            <ShelterCard
              style={rootStyles.shelterCard}
              shelter={shelter}
              bookmarked={isBookmarked(shelter.id)}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
            />
          </Link>
        ))}
      </ul>
      <div style={rootStyles.pagenator}>
        <Button onClick={previousPage}>前へ</Button>
        <Button onClick={nextPage}>次へ</Button>
      </div>
    </div>
  )
}
