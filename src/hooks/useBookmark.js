'use strict'

const useBookmark = () => {
  const [bookmarks, setBookmarks] = React.useState([])

  /**
   * 避難所の id を受け取ってブックマークに追加する
   */
  const addBookmark = React.useCallback(id => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks([...bookmarks, id])
  }, [setBookmarks])

  /**
   * 避難所の id を受け取ってブックマークから削除する
   */
  const removeBookmark = React.useCallback(id => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks(bookmarks.filter(bookmark => bookmark !== id))
  }, [setBookmarks])

  /**
   * 避難所の id を受け取ってブックマークに含まれるか boolean を返す関数
   */
  const isBookmarked = React.useCallback(id => bookmarks.some(bookmark => bookmark === id), [bookmarks])

  React.useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks(bookmarks)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks) || [])
  }, [bookmarks])

  return { bookmarks, addBookmark, removeBookmark, isBookmarked }
}
