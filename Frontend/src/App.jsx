import React from 'react'
import  './App.css'
import Navbar from './components/Navbar'
import  Footer from './components/Footer'

function App() {
  return (      
    <div className="App">
      <Navbar></Navbar>   
      <div className="container">
          <div className="list-header">
          <h2>Dina kommande event</h2>
        </div> 

      <div className='event-board'>
        <ul className='item-list'>       
         
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>  
         
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>  
         
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>     

          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>     
              
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>          

            
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>     
            
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>     
            
          <li className='event-item'>
            <h3 className='item-header'>Fest</h3>
            <p className='item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ullam.</p>
            <p className='item-date'>2022-20-20</p>
          </li>   
                              
         </ul> 
      </div>     

      {/* <div className="list-header">
        <h2>Gamla event</h2>
      </div> */}

      </div>    
      <Footer></Footer>
    </div>
)
}

export default App;