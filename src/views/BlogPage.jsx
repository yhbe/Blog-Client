import React from 'react';
import { useParams } from 'react-router-dom';
import "./BlogPage.css";

function BlogPage({ allBlogs }) {
  const { id } = useParams();

  const blog = allBlogs?.find(blog => blog._id === id) || null

  console.log(blog)
  
  const createCommentJSX = (comment) => {
    return (
      <div key={comment._id} className='comment-container'>
      <p className="comment-author">{comment.author}</p>
      <p className="comment-text">{comment.text}</p>
      </div>
    )
  }
  
  const commentJSX = blog?.comments.map(comment => createCommentJSX(comment)) || null

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
        <div className="comments-container">
        {commentJSX}
        </div>
      </div>
        <form className='form-add-comment' action="">
        <label htmlFor="addComment"></label>
        <input className='form-add-comment-input'  type="text" name="addComment" id="addComment" placeholder='Add a comment'/>
        <button type='submit' className='form-add-comment-button'>Add Comment</button>
        </form>
        </>
      ) }
    </main>
  );
}

export default BlogPage