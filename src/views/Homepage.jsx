import React from 'react';
import createHomepageBlogJSX from '../helper/createHomepageBlogJSX';
import "./Homepage.css";

function Homepage({allBlogs}) {
  const blogJSX = allBlogs?.map((blog) => createHomepageBlogJSX(blog)) || null;
  
  return (
    <div className="page-container">
      <header className="homepage-header homepage-padding">
        <h2 className="nav-h1-text">Blog</h2>
      </header>
      <section className="section-marketing homepage-padding">
        <p className="section-main-text">Explore new perspectives</p>
        <p className="section-supporting-text">
          Read and share ideas from independent voices, world-class
          publications, and experts from around the globe. Everyone's welcome.
        </p>
      </section>
      <main className="homepage-main-container">
        {blogJSX}
      </main>
    </div>
  );
}

export default Homepage