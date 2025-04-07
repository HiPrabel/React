import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import AboutDefault from '../components/AboutContent/AboutDefault/AboutDefault.jsx'
import AboutOne from '../components/AboutContent/AboutOne/AboutOne.jsx'
import AboutTwo from '../components/AboutContent/AboutTwo/AboutTwo.jsx'
import Contact from '../components/Contact/Contact.jsx'
import User from '../components/User/User.jsx'
import Github, { githubInfoLoader } from '../components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
          
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path="about" element={<About />}>
        <Route index element={<AboutDefault />} />  
        <Route path="one" element={<AboutOne />} />
        <Route path="two" element={<AboutTwo />} />
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:id' element={<User />}/>
      <Route 
      path='github' 
      element={<Github />}
      loader={githubInfoLoader}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)