import React from 'react';
import { useParams } from 'react-router-dom';
import "./BlogPage.css";

function BlogPage({ allBlogs }) {
  const { id } = useParams();

  const blog = allBlogs?.find(blog => blog._id === id) || null

  console.log(blog)

  return (
    <main className='blog-page-main-container'>
      {!blog && <h1>Blog not found</h1>}
      {blog && (
        <>
        <div className="blog-container">
        <p className="blog-title">{blog.title}</p>
        <p className="blog-author">{blog.author}</p>
        <p className="blog-body">{blog.body}</p>
        <p className="blog-date">March 16th 2023</p>
      </div>
      <div className="blog-comment-section">
        <form action="">
        <label htmlFor="addComment"></label>
        <input type="text" name="addComment" id="addComment" placeholder='Add a comment'/>
        <button>Add Comment</button>
        </form>
      </div>
        </>
      ) }
    </main>
  );
}

export default BlogPage