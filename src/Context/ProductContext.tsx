import { ReactElement, createContext, useCallback, useContext, useReducer } from "react"

type cartState = {
  isCartDisplay: boolean
}
export const initCartState = {
  isCartDisplay: false
}
const enum actions {
  FLIP
}
type reducerType ={
  type: actions
}

const reducer = (state: cartState, action: reducerType):cartState =>{
  switch(action.type){
    case actions.FLIP: return {...state, isCartDisplay: !state.isCartDisplay}
    default: throw new Error()
  }
}

const useCartDisplay = (initCartState: cartState) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const flip = useCallback(() =>dispatch({type: actions.FLIP}), [])

  return {state, flip}
} 

type CartContextType = ReturnType<typeof useCartDisplay>

const initCartContext: CartContextType = {
  state:initCartState,
  flip: () => {}
}

export const CartContext = createContext<CartContextType>(initCartContext)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CartContextProvider = ({children, ...initCartState}: ChildrenType & cartState): ReactElement =>{
  return (
    <CartContext.Provider value={useCartDisplay(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

type UseCartContextType = {
  isCartDisplay: boolean,
  flip: () => void
}

export const useCart = (): UseCartContextType =>{
  const {state: {isCartDisplay}, flip} = useContext(CartContext)
  return {isCartDisplay, flip}
}


  
