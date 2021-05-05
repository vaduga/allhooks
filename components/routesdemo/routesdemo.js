require("./style.css")

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import React from 'react';
  
  const Win1 = ()=> {
    return (<h1> Window 1 </h1>)
  }
  const Win2 = ()=> {
    return (<div style={{maxWidth: "800px"}}><h1> Window 2</h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,  <br/><br/></div> )
  }
  
  
  
  export default function routesDemo() {
  
  return (
    <>
    <BrowserRouter>
      <div style={{minWidth: "50%", border: "1px dotted"}}>
        <ul>
          <li>
             <Link to="/win1">
            <button>  
              Ugly route 1 <span className="material-icons">
  alarm_add
  </span>
              </button> </Link> 
          </li>
          <br/>
          <li>
            <Link to="/win2">
                <button>  
              Ugly route 2 <span style={{color: "green"}} className="material-icons">
  add_to_home_screen
  </span>
              </button> </Link> 
              
              
              
          </li>
        </ul>
        </div>
        <Switch>
          <Route path="/win1" component={Win1}/>
          <Route path="/win2" component={Win2}/>
        </Switch>
  
      </BrowserRouter>
  </>  
  )
  
  
  }
  
  
  