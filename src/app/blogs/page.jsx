import React from 'react';
import Post from '../components/Post';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "Ridoy Kumar",
    date: "September 20, 2026",
    category: "Next.js",
    description:
      "Learn the basics of Next.js and understand how routing, layouts, and server components work.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "John Doe",
    date: "September 18, 2026",
    category: "React",
    description:
      "A simple introduction to React components, props, state, and how they work together.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "JavaScript Array Methods",
    author: "Sarah Smith",
    date: "September 15, 2026",
    category: "JavaScript",
    description:
      "Explore useful JavaScript array methods such as map, filter, find, and reduce.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 4,
    title: "Learning TypeScript as a Beginner",
    author: "Alex Brown",
    date: "September 12, 2026",
    category: "TypeScript",
    description:
      "Understand TypeScript basics including types, interfaces, generics, and type safety.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
  {
    id: 5,
    title: "Building Modern Websites with Tailwind CSS",
    author: "Michael Lee",
    date: "September 10, 2026",
    category: "Tailwind CSS",
    description:
      "Learn how Tailwind CSS can help you build clean and responsive user interfaces quickly.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];


const BlogsPage = () => {
    return (
        <div>
            <h2>Our blogs </h2>
           <div className='grid grid-cols-2 gap-7 mx-5 my-5'>
             {
                blogsData.map( (post) => <Post key={ post.id } post = {post} ></Post> )
            }
           </div>
        </div>
    );
};

export default BlogsPage;