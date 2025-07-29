import { deleteBookmark } from "../../../utils/utils";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

function BookmarkCard({ bookmarks, setBookmarks }) {
    const handleDelete = (id) => {
        deleteBookmark(id);
        const newBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
        setBookmarks(newBookmarks);
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookmarks.map((bookmark, index) => (
                <motion.div
                    key={bookmark._id}
                    className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-12 w-12 object-cover rounded-full"
                                    src={`https://www.google.com/s2/favicons?domain=${bookmark.url}`}
                                    alt="favicon"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                    {bookmark.title}
                                </h1>
                            </div>
                        </div>
                        <a
                            href={bookmark.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out block w-full truncate"
                        >
                            Go to the Website
                        </a>
                    </div>
                    <div className="px-6 pb-4 flex justify-end">
                        <button
                            onClick={() => handleDelete(bookmark._id)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out"
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}

export default BookmarkCard;
