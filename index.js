import React from 'react'
import ReactDOM from 'react-dom'
import RoutesDemo from './components/routesdemo/routesdemo'
import MaryCounter from './components/./marycounter/marycounter'



const App = () => {

return(
  <>
  <div className="SimpleContainer">
   <MaryCounter/>
   </div>
   
   <div className="SimpleContainer">
    <RoutesDemo/>
   </div>
   </>


  )
                                  
      
    }
      
                             
 
  
ReactDOM.render(<App/>, document.querySelector('#root'));
