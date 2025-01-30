import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Hidden Gems in Southeast Asia",
      excerpt: "Discover lesser-known destinations that will take your breath away, from secret beaches in Thailand to hidden temples in Cambodia...",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop&q=80",
      date: "March 15, 2024",
    },
    {
      title: "Best Street Food Around the World",
      excerpt: "A culinary journey through the most delicious street food destinations, from Bangkok to Mexico City...",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
      date: "March 5, 2024",
    },
    {
      title: "Sustainable Travel Tips",
      excerpt: "Learn how to minimize your environmental impact while exploring the world's most beautiful destinations...",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
      date: "February 28, 2024",
    },
    {
      title: "Adventure Sports Destinations",
      excerpt: "From bungee jumping in New Zealand to surfing in Bali, discover the best spots for thrill-seekers...",
      image: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=800&auto=format&fit=crop&q=80",
      date: "February 20, 2024",
    },
    {
      title: "Budget Travel Hacks",
      excerpt: "Smart tips and tricks to help you travel more while spending less. Learn the secrets of budget travelers...",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      date: "February 15, 2024",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center pb-4 mb-12 bg-gradient-to-r from-violet-800 to-indigo-700 bg-clip-text text-transparent">
          Travel Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <div className="p-6">
                <p className="text-sm text-violet-600 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">{post.title}</h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <p className="text-violet-600 hover:text-violet-800 font-medium">
                  Read More →
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
