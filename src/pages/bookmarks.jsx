'use strict'

const { Link } = ReactRouterDOM

const bookmarksStyles = {
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
}

const Bookmarks = () => {
  const { bookmarks, addBookmark, removeBookmark, isBookmarked } = useBookmark()

  if (isPC) return <p>本アプリはスマートフォンのみに対応しています。</p>

  return (
    <div style={bookmarksStyles.wrapper}>
      <h1 style={bookmarksStyles.title}>お気に入り</h1>
      <ul style={rootStyles.shelterList}>
        {bookmarks.map(shelter => (
          <Link key={shelter.id} to={`/shelter/${shelter.id}`}>
          <ShelterCard
            style={bookmarksStyles.shelterCard}
            shelter={shelter}
            bookmarked={isBookmarked(shelter.id)}
            addBookmark={addBookmark}
            removeBookmark={removeBookmark}
          />
        </Link>
        ))}
      </ul>
    </div>
  )
}
