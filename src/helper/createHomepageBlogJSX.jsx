import React from 'react';

function createHomepageBlogJSX(blog) {
  return (
    <article key={blog._id} className="homepage-article">
      <div className="article-top-half">
        <h1 className="article-title">{blog.title}</h1>
        <p className="article-title-supporting-text">by {blog.author}</p>
      </div>
      <div className="article-bottom-half">
        <p className="article-published-date">16 March 2023</p>
        <button className="view-article-button">View Post</button>
      </div>
    </article>
  );
}

export default createHomepageBlogJSX