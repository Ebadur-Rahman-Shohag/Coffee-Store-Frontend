import { deleteBookmark, updateBookmark } from "../../../utils/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { MdBookmarks } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

function BookmarkCard({ bookmarks, setBookmarks, search }) {
    // Filtered bookmarks (don't mutate props)
    const filteredBookmarks = bookmarks.filter((bookmark) =>
        bookmark.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteBookmark(id);
                    setBookmarks((prev) =>
                        prev.filter((bookmark) => bookmark._id !== id)
                    );
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                } catch (error) {
                    console.error("Failed to delete:", error);
                    Swal.fire("Error", "Failed to delete the item.", "error");
                }
            }
        });
    };

    const handleUpdate = (id) => {
        const modal = document.getElementById(`my_modal_${id}`);
        if (modal) modal.showModal();
    };

    const handleUpdateSubmit = async (e, id) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const url = form.url.value;
        const data = { title, url };

        try {
            const updated = await updateBookmark(id, data);
            setBookmarks((prev) =>
                prev.map((b) => (b._id === id ? updated : b))
            );
            document.getElementById(`my_modal_${id}`).close();
        } catch (error) {
            console.error("Failed to update:", error);
            Swal.fire("Error", "Failed to update the bookmark.", "error");
        }
    };

    return (
        <section className="max-w-7xl mx-auto">
            {filteredBookmarks.length === 0 ? (
                <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <MdBookmarks className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-600 mb-2">No bookmarks found</h3>
                    <p className="text-gray-500">
                        {search ? `No bookmarks match "${search}"` : "Start by adding your first bookmark above"}
                    </p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBookmarks.map((bookmark, index) => (
                        <motion.div
                            key={bookmark._id}
                            className="group relative glass rounded-3xl overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative p-6">
                                {/* Header with icon */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <MdBookmarks className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-lg font-bold text-gray-800 truncate group-hover:text-purple-700 transition-colors duration-300">
                                                {bookmark.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                {/* URL preview */}
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 truncate mb-3">
                                        {new URL(bookmark.url).hostname}
                                    </p>
                                    <a
                                        href={bookmark.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Visit Site
                                    </a>
                                </div>

                                {/* Action buttons */}
                                <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.button
                                        onClick={() => handleUpdate(bookmark._id)}
                                        className="p-2 bg-blue-500/20 hover:bg-blue-500 text-blue-600 hover:text-white rounded-xl transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FiEdit size={16} />
                                    </motion.button>
                                    <motion.button
                                        onClick={() => handleDelete(bookmark._id)}
                                        className="p-2 bg-red-500/20 hover:bg-red-500 text-red-600 hover:text-white rounded-xl transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaTrash size={16} />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Enhanced Modal */}
                            <dialog id={`my_modal_${bookmark._id}`} className="modal">
                                <div className="modal-box glass border-0 rounded-3xl max-w-md">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <FiEdit className="w-8 h-8 text-white" />
                                        </div>
                                        <h1 className="text-2xl font-black gradient-text">
                                            Edit Bookmark
                                        </h1>
                                        <p className="text-gray-600 mt-2">Update your bookmark details</p>
                                    </div>

                                    <form
                                        onSubmit={(e) => handleUpdateSubmit(e, bookmark._id)}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label
                                                htmlFor={`edit-title-${bookmark._id}`}
                                                className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                                            >
                                                Title
                                            </label>
                                            <input
                                                id={`edit-title-${bookmark._id}`}
                                                name="title"
                                                defaultValue={bookmark.title}
                                                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-800 font-medium"
                                                type="text"
                                                placeholder="Bookmark title"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor={`edit-url-${bookmark._id}`}
                                                className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                                            >
                                                URL
                                            </label>
                                            <input
                                                id={`edit-url-${bookmark._id}`}
                                                name="url"
                                                defaultValue={bookmark.url}
                                                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-800 font-medium"
                                                type="url"
                                                placeholder="https://example.com"
                                                required
                                            />
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <button
                                                type="submit"
                                                className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => document.getElementById(`my_modal_${bookmark._id}`).close()}
                                                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-300"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default BookmarkCard;
