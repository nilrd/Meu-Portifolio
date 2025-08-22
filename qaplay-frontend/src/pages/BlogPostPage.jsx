import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { getPostBySlug, getRecentPosts } = useContent();
  
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post não encontrado
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegação */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Link>
        </div>

        {/* Header do Post */}
        <header className="mb-8">
          {post.featured && (
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
              ⭐ Em destaque
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readingTime}
            </div>
            <div className="flex items-center">
              Por {post.author}
            </div>
            <button
              onClick={sharePost}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Conteúdo do Post */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d+\. /)) {
                const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\. /));
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300">
                        {item.replace(/^\d+\. /, '')}
                      </li>
                    ))}
                  </ol>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </article>

        {/* Posts Relacionados */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <Clock className="w-3 h-3 mr-1" />
                  {relatedPost.readingTime}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPostPage;

