import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md: w-1/3 ml-3 mt-5">
            <div>
                <h3 className='text-3xl bg-purple-400 text-center rounded-xl mb-2 py-2'>Reading Time Spend: {readingTime} </h3>
            </div>
            <div>
                <h2 className="text-xl font-bold">Bookmarked Blogs: {bookmarks.length} </h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;