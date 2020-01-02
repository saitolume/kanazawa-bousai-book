'use strict'

const bookmarksStyles = {
  wrapper: {
    margin: '88px 16px 100px'
  }
}

const Bookmarks = () => {
  const { bookmarks } = useBookmark()

  if (isPC) return <p>本アプリはスマートフォンのみに対応しています。</p>

  return (
    <div style={bookmarksStyles.wrapper}>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark.id}>{bookmark.name}</li>
        ))}
      </ul>
    </div>
  )
}
