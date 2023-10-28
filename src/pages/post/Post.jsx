import React, { useState } from 'react';
import './post.css';

const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: 'first post!', comments: [], likes: 0 },
    { id: 2, content: 'second post!', comments: [], likes: 0 }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      const newPostObject = {
        id: posts.length + 1,
        content: newPost,
        comments: [],
        likes: 0
      };
      setPosts([...posts, newPostObject]);
      setNewPost('');
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDeleteComment = (postId, commentIndex) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = post.comments.filter((_, index) => index !== commentIndex);
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleLikePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleKeyPress = (e, postId) => {
    if (e.key === 'Enter') {
      const comment = e.target.value;
      if (comment.trim() !== '') {
        handleAddComment(postId, comment);
        e.target.value = ''; 
      }
    }
  };

  return (
    <div className="post-container">
      <div className="post-form">
        <textarea
        className='wh'
          placeholder="What's happening?"
          value={newPost}
          onChange={handlePostChange}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <button onClick={() => handleLikePost(post.id)}>Like ({post.likes})</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <div className="comments">
              {post.comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment}</p>
                  <button onClick={() => handleDeleteComment(post.id, index)}>Delete</button>
                </div>
              ))}
              <div className="comment-form">
                <input
                  placeholder="Add a comment..."
                  onKeyPress={(e) => handleKeyPress(e, post.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
