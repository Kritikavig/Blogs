import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

//Wrap app in router
//Router -> Routes -> Route 
//Route parameter is variable/dynamic part in a route

//for storing data, we are using js server 
// npx json-server --watch data/db.json --port 8000
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
        {/* Routes only returns 1 route or page which matches  */}
          <Routes>    
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/create" element={<Create/>} />
            <Route exact path="/blogs/:id" element={<BlogDetails/>} />
            <Route exact path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
