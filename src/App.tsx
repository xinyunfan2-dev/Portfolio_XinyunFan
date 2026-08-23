import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blogs";
import BlogPost from "./components/BlogPost";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blog />
      <Skills />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        id="top"
        className="min-h-screen bg-[var(--page)] text-[var(--ink)]"
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
