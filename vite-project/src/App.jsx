/* eslint-disable no-unused-vars */

import './App.css'
// import Fotter from './component/Fotter'
// import Hero from "./componant/Hero";
import About from "./component/About";
import {  Routes, Route , Link} from "react-router-dom";
import {useParams} from 'react-router-dom'
function App() {
  const { userId } = useParams();
  return (
    <>
  <nav> 
<ul>
<Link to ="/about"> 
<li> About </li>
<li> Home </li>
</Link>
</ul>
  </nav>
  <Routes>
  <Route path="/" element={<h1>hii this is home page! </h1> }/>
  <Route path="/about" element={<About/> }/>
  <Route path="/*" element={<h1> what do you want here!!!!!</h1>} />
  </Routes>
  
    </>
    )
}

export default App
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
