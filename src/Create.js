import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('author1');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title,body,author}; //create object for new entry 
    setLoading(true);
     
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>{
      setLoading(false);
      navigate('/');
    })
  }

  return (
    <div className='create'>
      <h1>Add Blogs!!!</h1>

      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input 
        type='text' 
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)} />

        <label>Blog Body : </label>
        <textarea 
        type='text' 
        required
        value={body}
        onChange={(e)=> setBody(e.target.value)}
        />
        <label>Blog Author : </label>
        <select 
        value={author}
        onChange={(e)=> setAuthor(e.target.value)} >
          <option value='author1'>author1</option>
          <option value='author2'>author2</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading &&  <button disabled>Adding Blog</button>}
      </form>

    </div>
  )
}

export default Create
