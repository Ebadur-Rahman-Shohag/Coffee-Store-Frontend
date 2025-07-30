import { deleteBookmark, updateBookmark } from "../../../utils/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function BookmarkCard({ bookmarks, setBookmarks }) {
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Handle the deletion of a bookmark.
     * @param {string} id the id of the bookmark to be deleted
     */
    /*******  d167c7d0-19ae-4861-ac04-2276a083ad65  *******/
    const handleDelete = async (id) => {
        await deleteBookmark(id);
        const newBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
        setBookmarks(newBookmarks);
    };

    const handleUpdate = (id) => {
        // Handle update logic here
        // const modalId = `my_modal_${id}`;
        document.getElementById(`my_modal_${id}`).showModal();
    };

    const handleUpdateSubmit = async (e, id) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const url = form.url.value;
        const data = { title, url };
        const updated = await updateBookmark(id, data);
        setBookmarks(bookmarks.map((b) => (b._id === id ? updated : b)));
        document.getElementById(`my_modal_${id}`).close();
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
                            onClick={() => handleUpdate(bookmark._id)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out"
                        >
                            <FiEdit size={20} />
                        </button>
                    </div>
                    <dialog id={`my_modal_${bookmark._id}`} className="modal">
                        <div className="modal-box">
                            <h1 className="text-2xl text-center font-extrabold text-gray-900 mb-10">
                                Edit Bookmark
                            </h1>
                            <form
                                onSubmit={(e) => handleUpdateSubmit(e, bookmark._id)}
                                className="space-y-8"
                            >
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-xl font-semibold text-gray-800 mb-2"
                                    >
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        name="title"
                                        defaultValue={bookmark.title}
                                        className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                        type="text"
                                        placeholder="e.g., Awesome Design Resources"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="url"
                                        className="block text-xl font-semibold text-gray-800 mb-2"
                                    >
                                        URL
                                    </label>
                                    <input
                                        id="url"
                                        name="url"
                                        defaultValue={bookmark.url}
                                        className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                        type="url"
                                        placeholder="https://example.com"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                                >
                                    Update Bookmark
                                </button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </motion.div>
            ))}
        </section>
    );
}

export default BookmarkCard;
