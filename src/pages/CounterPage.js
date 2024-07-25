import { useReducer } from 'react';
import Button from '../components/Button';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const UPDATE_INPUT_VALUE = 'update value';
const ADD_ALL = 'add';

function reducer(state, action){
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count+1
            };
        case DECREMENT_COUNT:
            return {
                    ...state,
                    count: state.count-1
                };
        case UPDATE_INPUT_VALUE:
            return {
                    ...state,
                    inputValue: action.payload
                };
        case ADD_ALL:
                    return {
                            ...state,
                            count: state.count + parseInt(state.inputValue),
                            inputValue: 0
                        };
        default:
            return state;
    }
}

function CounterPage(){
    const [state,dispatch]  = useReducer(reducer,{
        count:0,
        inputValue:0
    });

    const incrementValue = ()=>{
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrementValue = ()=>{
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const updateValue = (event)=>{
        dispatch({
            type: UPDATE_INPUT_VALUE,
            payload: event.target.value
        });
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch({
            type: ADD_ALL,
        });
    };

    return (<div>
        <h1>Value: {state.count}</h1>
        <Button onClick={incrementValue} primary>Increment</Button>
        <Button onClick={decrementValue} primary>Decrement</Button>

        <form onSubmit={onSubmit}>
            <h1>Add Number</h1>
            <input type='number' placeholder='Number...' onChange={updateValue} value={state.inputValue} />
            <Button onClick={onSubmit} secondary>Submit</Button>
        </form>
    </div>);
}

export default CounterPage;