//making our custom hook for fetch functionality
import {useState,useEffect} from 'react'

const useFetch = (url) => {

  const [blogs,setBlogs] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  //useEffect runs the function when component renders again or data is changed
  //[] -> dependency list, by default runs only after first inital render
  //getting data from db.json, using fetch promise

  useEffect(()=>{
    const abortCont = new AbortController();  //allows to abort dom req, when page changes

    setTimeout(()=>{
      fetch(url, {signal: abortCont.signal})
      .then(res=>{
        if(!res.ok) throw Error('could not fetch the data!!');
        return res.json()
      })
      .then(data =>{
        setBlogs(data);
        setLoading(false);
        setError(null);
      })
      .catch(e=> {
        if(e.name==='AbortError')
            console.log('fetched abort error ');
        else{
          setLoading(false)
          setError(e.message)
        }
      })
    },1000);

    return ()=> abortCont.abort();  //runs when url of page changes

  },[url])                          //re-render when url changes

  return {blogs,loading,error};
}

export default useFetch;
