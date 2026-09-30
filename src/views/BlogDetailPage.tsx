"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { blogs, Blog } from '../data/blogs';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

const BlogDetailPage = ({ blog }: { blog: Blog }) => {
  const relatedPosts = blogs.filter(post => post.category === blog.category && post.id !== blog.id).slice(0, 3);

  if (!blog) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <p className="mb-8">The blog post you are looking for might have been removed or doesn&apos;t exist.</p>
        <Link href="/blog" className="btn btn-primary">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary text-white mb-4">
            {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            {blog.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/90">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="flex items-center text-primary font-medium mb-8 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Back to All Blogs
            </Link>
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={18} className="text-primary" />
                <span className="font-medium">Category:</span>
                <Link 
                  href={`/blog?category=${blog.category}`} 
                  className="text-primary hover:underline"
                >
                  {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
