'use strict'

const useBookmark = () => {
  const [bookmarks, setBookmarks] = React.useState([])

  const addBookmark = React.useCallback(item => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, item]))
  }, [])

  /**
   * 避難所の id を受け取ってブックマークから削除する
   */
  const removeBookmark = React.useCallback(id => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter(bookmark => bookmark.id !== id)))
  }, [])

  /**
   * 避難所の id を受け取ってブックマークに含まれるか boolean を返す関数
   */
  const isBookmarked = React.useCallback(id => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    return bookmarks.some(bookmark => bookmark.id === id)
  })

  React.useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    setBookmarks(bookmarks)
  }, [])

  return { bookmarks, addBookmark, removeBookmark, isBookmarked }
}
