import { ReactElement, createContext, useCallback, useContext, useReducer } from "react"

type productState = {
  isCartDisplay: boolean,
  totalItems: number,
  totalPrice: number,
}
export const initProductState = {
  isCartDisplay: false,
  totalItems: 0,
  totalPrice: 0,
}
const enum actions {
  FLIP,
  ADD,
  DELETE,
  MODIFY,
}
type reducerType ={
  type: actions
}

const reducer = (state: productState, action: reducerType):productState =>{
  switch(action.type){
    case actions.FLIP: return {...state, isCartDisplay: !state.isCartDisplay}
    default: throw new Error()
  }
}

const useCartDisplay = (initProductState: productState) => {
  const [state, dispatch] = useReducer(reducer, initProductState)

  const flip = useCallback(() =>dispatch({type: actions.FLIP}), [])

  return {state, flip}
} 

type CartContextType = ReturnType<typeof useCartDisplay>

const initCartContext: CartContextType = {
  state:initProductState,
  flip: () => {}
}

export const CartContext = createContext<CartContextType>(initCartContext)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CartContextProvider = ({children, ...initProductState}: ChildrenType & productState): ReactElement =>{
  return (
    <CartContext.Provider value={useCartDisplay(initProductState)}>
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


  
