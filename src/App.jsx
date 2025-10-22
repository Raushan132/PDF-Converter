import { useState } from 'react'
import ImageConverter from './pages/ImageConverter'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MergePDF from './pages/MergePDF'
import AddPageNo from './pages/AddPageNo'
import SplitPdf from './pages/SplitPdf'
import MergePdfBlog from './pages/MergePdfBlog'
import PageNoBlog from './pages/PageNoBlog '
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Blog from './pages/Blog'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="max-h-screen overflow-y-auto scroll-container">
      
       <Header />
        {/* Scroll to top on route change */}
        <ScrollToTop />
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge" element={<MergePDF />} />
        <Route path="/image-convert" element={<ImageConverter />} />
        <Route path="/split" element={<SplitPdf />} />
        <Route path="/pageNo" element={<AddPageNo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/blog" >
            <Route path='' element={<Blog />}/>
            <Route path="merge-pdf" element={<MergePdfBlog />} />
            <Route path="pageNo" element={<PageNoBlog />} />
        </Route>
       </Routes>

       <Footer />

    </div>
    </>
  )
}

export default App
