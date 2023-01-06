import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import { Routes, Route } from "react-router-dom";
import AddArticles from "./Containers/AddArticle/addArticles";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="ecrire/" element={<AddArticles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
      
    </>
  );
}

export default App;
