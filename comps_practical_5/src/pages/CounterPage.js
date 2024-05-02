import Button from '../components/button';
//import useCounter from "../hook/use-counter";
import { useReducer } from 'react';
import Panel from '../components/panel';
import { produce } from 'immer';


const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE =  'addValue';
const SUBMIT_VALUE = 'submitValue';

const reducer = (state, action) =>{
    switch(action.type){
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE:
            // immer function
            //state.valueToadd = action.payload;
            return{
                ...state,
                valueToadd: action.payload,
            };
        case SUBMIT_VALUE:
            // immer function
            // state.count = state.count + state.valueToadd;
            // state.valueToadd = 0;
            return{
                ...state,
                count: state.count + state.valueToadd,
                valueToadd: 0
            }
        default:
            return state;
    };
};

function CounterPage({initialCount}){

    //const { count, increment } = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToadd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToadd: 0,
    })
    
    const increment = () =>{
        //setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    };


    const decrement = () =>{
        //setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handlechange = (event) =>{
        const value = parseInt(event.target.value) || 0;
        //setValueToAdd(value);
        dispatch({
            type: ADD_VALUE,
            payload: value,
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({
            type: SUBMIT_VALUE
        });
        // setCount(count + valueToadd);
        // setValueToAdd(0);
    };
    // return <div>
    //     <h1>Count is {count}</h1>
    //     <Button onClick={increment}>
    //         Increment
    //     </Button>
    // </div>


    return <Panel className=' m-3'>
        <h1 className=' text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
            <Button onClick={increment}>
                Increment
            </Button>
            <Button onClick={decrement}>
                Decrement
            </Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input 
                type='number' 
                className=' p-1 m-3 bg-gray-50 border border-gray-300'
                value={state.valueToadd || ""}
                onChange={handlechange}
            />
            <Button>Add it!</Button>
        </form>
    </Panel>
}


export default CounterPage;