import { deleteBookmark } from "../../../utils/utils";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

function BookmarkCard({ bookmarks, setBookmarks }) {

    const [editable, setEditable] = useState(false);
    const handleDelete = (id) => {
        deleteBookmark(id);
        const newBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
        setBookmarks(newBookmarks);
    };

    const handleEdit = (id) => {
        setEditable(true);
        // const newBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
        // setBookmarks(newBookmarks);
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
                                <MdBookmarks className="h-8 w-8" />
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
                            className="text-lg text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out block w-fit truncate"
                        >
                            Go to the Website
                        </a>
                    </div>
                    <div className="px-6 pb-4 flex justify-end space-x-3">
                        <button
                            onClick={() => handleDelete(bookmark._id)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out"
                        >
                            <FaTrash size={20} />
                        </button>
                        <button
                            onClick={() => handleEdit(bookmark._id)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out"
                        >
                            <FiEdit size={20} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}

export default BookmarkCard;
