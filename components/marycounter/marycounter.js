require('./style.css')
import React from 'react'

const {useContext,useState,useReducer,useEffect, useRef} = React
const MyContext = React.createContext();

const MyProvider = (props) => {
  const [state, setState] = useState(
    { persons: [ { name: 'Mary', age: 10}, { name: 'Jane', age: 15} ]
    ,
     choice: "Mary"
    }
  );
  
  const [context, dispatch] = useReducer(reducer, state)
  
  return (
      <MyContext.Provider value={{context, dispatch}}>
      {props.children}
      </MyContext.Provider>
         )

}

function reducer(context, action) {
let persons = context.persons
  let key = action.key
  switch (action.type) {
    case "plus":
      return {...context, choice: persons[key].name, persons: persons.map((el, idx) => idx == key? {...el, age: el.age+1}: el)};
    case "minus":
      return {...context, choice: persons[key].name, persons: persons.map((el, idx) => idx == key? {...el, age: el.age-1}: el)};
    case "choose":
      return {...context, choice: persons[key].name}
      
  }
}


const Person = (props) => {
    const renderCount = useRef({[props.name]: 0})
    const name = useRef("None")   // сейчас не используется
    const context = useContext(MyContext);
     
    useEffect(()=> {
      renderCount.current[props.name] += 1
      console.log(`${props.name} rendered for the ${renderCount.current[props.name]} time`)
    })
     
     return (
       <div className="person">
               <h1 ref={name} onClick={props.choose}>{props.name}</h1>
         <p>Возраст : {props.age}</p>
               <button onClick={props.plus}>Больше</button>
               <button onClick={props.minus}>Меньше</button>
          <p>Rendered {renderCount.current[props.name]} times</p>
           </div>
         )
          
       
   }

   const All = () => {
  
    const {context, dispatch} = useContext(MyContext);
    
    const list = context.persons.map((person, key) => (
       <Person key={key}
         name={person.name} 
         age={person.age} 
         plus={()=> dispatch({type: "plus",  key}) }
         minus={()=> dispatch({type: "minus",  key}) }
         choose={()=> dispatch({type: "choose",  key}) }
         
       />
       
       )
                                         )
     
     return (
        <>
        <div style={{width: "20%"}}>
         <p>You're changing: {context.choice}</p>
         </div>
         {list}
         
        </>
       )
   }


 const Wrapper = ()=> (
  
  <MyProvider>

  <All/>
  </MyProvider>
 )

   export default Wrapper