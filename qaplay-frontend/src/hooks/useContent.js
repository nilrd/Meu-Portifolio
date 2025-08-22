import { useState, useEffect } from 'react';
import blogPosts from '../data/blog-posts.json';
import siteContent from '../data/site-content.json';

export const useContent = () => {
  const [content, setContent] = useState(siteContent);
  const [posts, setPosts] = useState(blogPosts);

  // Função para buscar posts
  const searchPosts = (query) => {
    if (!query) return posts;
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  };

  // Função para filtrar posts por tag
  const filterPostsByTag = (tag) => {
    if (!tag) return posts;
    
    return posts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
  };

  // Função para obter post por slug
  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  // Função para obter posts em destaque
  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured);
  };

  // Função para obter posts recentes
  const getRecentPosts = (limit = 3) => {
    return posts
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit);
  };

  // Função para obter todas as tags
  const getAllTags = () => {
    const allTags = posts.flatMap(post => post.tags);
    return [...new Set(allTags)];
  };

  return {
    content,
    posts,
    searchPosts,
    filterPostsByTag,
    getPostBySlug,
    getFeaturedPosts,
    getRecentPosts,
    getAllTags
  };
};

export default useContent;

