import React from 'react';
import "./Homepage.css";

function Homepage() {
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
        <article className="homepage-article">
          <div className="article-top-half">
            <h1 className="article-title">How to make pizza</h1>
            <p className="article-title-supporting-text">by Alan Walker</p>
          </div>
          <div className="article-bottom-half">
            <p className="article-published-date">16 March 2021</p>
            <button className="view-article-button">View Post</button>
          </div>
        </article>
        <article className="homepage-article">
          <div className="article-top-half">
            <h1 className="article-title">How to make pizza</h1>
            <p className="article-title-supporting-text">by Alan Walker</p>
          </div>
          <div className="article-bottom-half">
            <p className="article-published-date">16 March 2021</p>
            <button className="view-article-button">View Post</button>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Homepage