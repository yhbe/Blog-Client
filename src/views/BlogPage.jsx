import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./BlogPage.css";

function BlogPage({ allBlogs, port, refreshPage }) {
  const { id } = useParams();
  const navigate = useNavigate()

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = {
      author: "Anonymous",
      text: form.addComment.value,
    };
    
    try {
      const response = await fetch(`${port}/blogs/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        form.addComment.value = ""
        refreshPage()
      } else {
        throw new Error("Failed to add comment")
      }
    } catch (error){
      console.log(error)
    }
  }

  const handleNavigation = () => {
    navigate("../Blog-Client");
  }

  return (
    <main className="blog-page-main-container">
      {!blog && <h1>Blog not found</h1>}
      {blog && (
        <>
          <div className="blog-container">
            <i onClick={() => handleNavigation()} className="fa-solid fa-arrow-left"></i>
            <p className="blog-title">{blog.title}</p>
            <p className="blog-author">{blog.author}</p>
            <p className="blog-body">{blog.body}</p>
            <p className="blog-date">March 16th 2023</p>
          </div>
          <div className="blog-comment-section">
            <div className="comments-container">{commentJSX}</div>
          </div>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="form-add-comment"
            action=""
          >
            <label htmlFor="addComment"></label>
            <input
              className="form-add-comment-input"
              type="text"
              name="addComment"
              id="addComment"
              placeholder="Add a comment"
            />
            <button type="submit" className="form-add-comment-button">
              Add Comment
            </button>
          </form>
        </>
      )}
    </main>
  );
}

export default BlogPage