import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { addBookmark, fetchBookmarks } from "../../../utils/utils";
import Loader from "../Loader/Loader";

function Form() {
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const bookmarkData = await fetchBookmarks();
            setBookmarks(bookmarkData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const title = form.title.value;
        const url = form.url.value;
        const data = { title, url };
        await addBookmark(data);
        form.reset();
        const bookmarkData = await fetchBookmarks();
        setBookmarks(bookmarkData);
        setLoading(false);
    };

    return (
        <section className="max-w-7xl min-h-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="bg-white shadow-2xl rounded-2xl border border-gray-200 p-8 max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-5xl text-center font-extrabold text-gray-900 mb-10">
                    Bookmark Manager
                </h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <label
                            htmlFor="title"
                            className="block text-xl font-semibold text-gray-800 mb-2"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            type="text"
                            placeholder="e.g., Awesome Design Resources"
                            required
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <label
                            htmlFor="url"
                            className="block text-xl font-semibold text-gray-800 mb-2"
                        >
                            URL
                        </label>
                        <input
                            id="url"
                            name="url"
                            className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            type="url"
                            placeholder="https://example.com"
                            required
                        />
                    </motion.div>
                    <motion.button
                        className="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Add Bookmark
                    </motion.button>
                </form>
            </motion.div>
            {loading ? (
                <Loader />
            ) : (
                <BookmarkCard
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                />
            )}
        </section>
    );
}

export default Form;
