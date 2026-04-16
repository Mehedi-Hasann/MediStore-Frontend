"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ExplorePage() {
  return (
    <div
      className="w-full flex items-center justify-center
      min-h-[calc(100vh-75px)]
      bg-gradient-to-br
      from-blue-200 via-indigo-200 to-purple-200
      dark:from-gray-950 dark:via-slate-900 dark:to-black"
    >
      <div className="text-center space-y-8 px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Welcome to MediStore
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Find medicines easily and quickly
        </p>

        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
            px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg
            bg-blue-600 text-white
            hover:bg-blue-700
            dark:bg-blue-500 dark:hover:bg-blue-600
            transition duration-300"
          >
            Explore Medicine
          </motion.button>
        </Link>

      </div>
    </div>
  );
}