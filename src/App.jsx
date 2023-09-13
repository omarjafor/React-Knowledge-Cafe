import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = [readingTime + time]
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
          handleMarkAsRead = {handleMarkAsRead}
          handleAddToBookmark = {handleAddToBookmark}
        ></Blogs>
        <Bookmarks
          readingTime={readingTime}
          bookmarks = {bookmarks}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
