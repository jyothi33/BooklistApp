import React from 'react'
import About from './About'
import Home from './Home'
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import DetailGame from './DetailGame';
import GameError from './GameError';
import UseQueryShop from './UseQueryShop';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const qc = new QueryClient();

const NavDemo = () => {
    return (
        <div>
       <QueryClientProvider client={qc}>
        <Router>
        <nav className="nav-links">
          
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="shop">Shop</Link>
          <Link to="usequeryshop"> UseQuery Shop</Link>

     
      
  </nav>
            <Routes>
               
            <Route path="/" element={<Home />} />    
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/usequeryshop" element={<UseQueryShop />} />

            <Route path="/detail/:itemid" element={<DetailGame />} />     
            <Route path="*" element={<GameError />} />
            </Routes>
                  
        </Router>
        <ReactQueryDevtools position='bottom-right' initialIsOpen="false"/>
        </QueryClientProvider>    
        </div>
        
    )
}

export default NavDemo
