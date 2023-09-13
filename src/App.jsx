import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = () => {
    console.log('Bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
