import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './Home'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> {/* for header on all pages */}
            <Route index element={<Home />} /> {/* index means no path */}
            {/* <Route path='/movies/' element={<Movies />} />
            <Route path='/shows/' element={<Shows />} />
            <Route path='/vpns/' element={<VPNs />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
