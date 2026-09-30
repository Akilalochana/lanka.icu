"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { blogs } from '../data/blogs';

const BlogPage = ({ initialCategory = 'all' }: { initialCategory?: string }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const filteredBlogs = activeCategory === 'all' ? blogs : blogs.filter(blog => blog.category === activeCategory);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);



  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'jungle', name: 'Jungle' },
    { id: 'temple', name: 'Temple' },
    { id: 'waterfall', name: 'Waterfall' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url(/welcometolanka.JPG)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Stories from Sri Lanka
          </h1>
          <p className="text-lg max-w-2xl">
            Discover insights, tips, and experiences from the pearl of the Indian Ocean
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-neutral-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                    </span>
                    <span className="text-xs text-neutral-500 ml-auto">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">{blog.date}</span>
                    <Link
                      href={`/blog/${blog.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">
                No blog posts found in this category. Check back soon for updates!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
