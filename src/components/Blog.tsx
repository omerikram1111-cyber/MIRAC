import React from 'react';
import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#00F0FF', fontFamily: 'Orbitron, sans-serif', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.875rem' }}>
          // KNOWLEDGE BASE
        </p>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'Space Grotesk, sans-serif' }}>
          Insights & Expertise
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: '#0D0F1A',
                border: '1px solid rgba(0,240,255,0.1)',
                padding: '2rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00F0FF';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,240,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{
                color: '#00F0FF',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'inline-block'
              }}>
                {post.category}
              </span>

              <h3 style={{
                color: '#fff',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.25rem',
                lineHeight: '1.4',
                marginBottom: '1rem',
                flexGrow: 1
              }}>
                {post.title}
              </h3>

              <p style={{
                color: '#a0aec0',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '1rem',
                marginTop: 'auto'
              }}>
                <div style={{ color: '#718096', fontSize: '0.8rem' }}>
                  {post.readTime} • {post.date}
                </div>
                <a href={`/blog/${post.slug}`} style={{
                  color: '#00F0FF',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  READ ARTICLE →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #00F0FF',
            color: '#00F0FF',
            padding: '1rem 2rem',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.875rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          >
            VIEW ALL ARTICLES →
          </button>
        </div>
      </div>
    </section>
  );
};