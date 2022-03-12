import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              
              <Route path='/homepage' element={<Homepage/>} />

              <Route path='/exchanges' element={<Exchanges/>}/>
              
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                
              <Route path='/crypto/:coinID' element={<CryptoDetails />} />
              
              <Route path='/news' element={<News />} />

            </Routes>
          </div>

        </Layout>
      

      <div className='footer' >
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center' }}>
          CryptoCentral <br />
          All Rights Reserved
        </Typography.Title>
        <Space >
            <Link to='/homepage' className='links'>Home</Link>
            <Link to='/exchanges' className='links'>Exchanges</Link>
            <Link to='/news' className='links'>News</Link>
        </Space>
        
      </div>
      </div>
      
    </div>
  )
}

export default App
