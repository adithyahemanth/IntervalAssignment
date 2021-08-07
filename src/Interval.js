import React,{useReducer,useMemo} from 'react'

const reducer = (state,action) =>{
   
    switch(action.type){
        case 'countA':
          return {countA : state.countA+1}
          case 'countB':
            return {countB: state.countB+1}
          case 'countC':
              return {countC: state.countC+1}
          case 'countD':
                return {countD: state.countD+1}                 
        default :
            return state   
        }
         
    }
    

function Interval(props) {
  
    const [counter, dispatch]=useReducer(reducer,{countA:0,countB:1,countC:2,countD:3})
  
  
  
    let answer =  useMemo(()=>setInterval(()=>dispatch({type:props.type}),1000),[props.type])

    return (
        <div>
   {props.type === 'countA' ? <p>countA:{counter.countA}</p>:<></>} 
    {props.type === 'countB' ? <p>countB:{counter.countB}</p>:<></>}
    {props.type === 'countC' ? <p>countC:{counter.countC}</p>:<></>}
    {props.type === 'countD' ? <p>countC:{counter.countD}</p>:<></>}           
        </div>
    )
}

export default Interval
