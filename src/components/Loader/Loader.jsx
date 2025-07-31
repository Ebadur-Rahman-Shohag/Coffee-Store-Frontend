import React from 'react'
import { motion } from 'framer-motion'

function Loader() {
    return (
        <div className='w-full h-fit flex flex-col justify-center items-center py-20'>
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Custom animated loader */}
                <div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Loading text */}
                <motion.p
                    className="text-gray-600 font-medium mt-6 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Loading your bookmarks...
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Loader