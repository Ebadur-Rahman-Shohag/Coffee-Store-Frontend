import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { addBookmark, fetchBookmarks } from "../../../utils/utils";
import Loader from "../Loader/Loader";

function Form() {
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

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
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-animation"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 float-animation" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10">
                <motion.div
                    className="glass rounded-3xl p-8 max-w-3xl mx-auto mb-16 shadow-2xl border-0"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-6xl font-black gradient-text mb-4 tracking-tight">
                            Bookmark Manager
                        </h1>
                        <p className="text-gray-600 text-lg font-medium">
                            Organize your favorite websites with style
                        </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="space-y-2"
                            >
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                                >
                                    Title
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-800 placeholder-gray-400 font-medium"
                                    type="text"
                                    placeholder="Awesome Design Resources"
                                    required
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="space-y-2"
                            >
                                <label
                                    htmlFor="url"
                                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                                >
                                    URL
                                </label>
                                <input
                                    id="url"
                                    name="url"
                                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-800 placeholder-gray-400 font-medium"
                                    type="url"
                                    placeholder="https://example.com"
                                    required
                                />
                            </motion.div>
                        </div>

                        <motion.button
                            className="w-full py-5 px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 text-lg relative overflow-hidden group"
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Bookmark
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </form>

                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search your bookmarks..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full px-6 py-4 pl-12 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-400 font-medium"
                            />
                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                {loading ? (
                    <Loader />
                ) : (
                    <BookmarkCard bookmarks={bookmarks} setBookmarks={setBookmarks} search={search} />
                )}
            </div>
        </section>
    );
}

export default Form;
