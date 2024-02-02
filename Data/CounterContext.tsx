import { ReactElement, createContext, useCallback, useContext, useReducer } from "react";

//Type du State
type StateType = {
  count: number,
  text: string
}
//Déclaration du State
export const initState = {count : 0, text: ""}

//Enum des actions possible
const enum REDUCER_ACTION_TYPE{
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
//Type de l'enum
type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}
//Reducer function
const reducer = (state: StateType, action: ReducerAction):StateType =>{
  switch(action.type){
    case REDUCER_ACTION_TYPE.INCREMENT: return{...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT: return{...state, count: state.count - 1}
    default: throw new Error()
  }
}
//Custom Hook that returns all the data needed
const useCounterContext = (initState: StateType) =>{
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
  const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])

  return {state, increment, decrement}
}
//Type of the return
type useCounterContextType = ReturnType<typeof useCounterContext>
//Init state function
const initContextState: useCounterContextType = {
  state: initState, 
  increment: () => {},
  decrement: () => {},
}
//Create context
export const CounterContext = createContext<useCounterContextType>(initContextState)
//Children Type
type ChildrenType = {
  children?: ReactElement | undefined
}
//Creating the provider
export const CounterProvider = ({
  children, ...initState
}:  ChildrenType & StateType): ReactElement => {
  return(
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  )
}
//Creating the hook type
type UseCounterHookType = {
  count: number,
  increment: () => void,
  decrement: () => void,
}
//Creating the final custom hook to set the counter up
export const useCounter = (): UseCounterHookType =>{
  const { state: {count}, increment, decrement } = useContext(CounterContext)

  return { count, increment, decrement }
}