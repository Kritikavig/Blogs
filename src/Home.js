import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  //giving endpoint to fetch hook 
  const {blogs,loading,error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      <h1>homepage</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!!"/> }
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='dev')} title="dev!!"/>  */} 
    </div>
  )
}

export default Home