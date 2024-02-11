import { ReactElement, createContext, useCallback, useReducer } from "react"

export type ProductTypeArray = {
  sku: string;
  name: string;
  price: string;
};
export type cartProduct = {
  sku: string,
  name: string,
  price: number,
  quantity: number,
};

export type productState = {
  isCartDisplay: boolean,
  totalItems: number,
  totalPrice: number,
  fullCart:cartProduct[] ,
}
export const initProductState: productState = {
  isCartDisplay: false,
  totalItems: 0,
  totalPrice: 0,
  fullCart: [{
    sku: "item0001",
    name: "Widget",
    price: 9.99,
    quantity: 0
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
    quantity: 0
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
    quantity: 0
  }]
}
const enum actions {
  FLIP,
  ADD,
  DELETE,
  CLEAR,
  CHANGE,
}
type reducerType ={
  type: actions
  payload?: string
}

const reducer = (state: productState, action: reducerType):productState =>{
  switch(action.type){
    case actions.FLIP: return {...state, isCartDisplay: !state.isCartDisplay}
    case actions.ADD: return {...state, fullCart: state.fullCart.map((prod) => prod.sku === action.payload ? {...prod, quantity: prod.quantity + 1} : prod)}
    case actions.DELETE: return{...state, fullCart: state.fullCart.map((prod) => prod.sku === action.payload ? {...prod, quantity: prod.quantity = 0} : prod)}
    case actions.CLEAR: return{...state, fullCart: state.fullCart.map((prod) => prod.quantity > 0 ? {...prod, quantity: prod.quantity = 0}: prod)}
    case actions.CHANGE: return{...state, fullCart: state.fullCart.map((prod) => prod.sku === action.payload ? {...prod, quantity: prod.quantity = 0} : prod)}
    default: throw new Error()
  }
}

const useProductDisplay = (initProductState: productState) => {
  const [state, dispatch] = useReducer(reducer, initProductState)

  const flip = useCallback(() =>dispatch({type: actions.FLIP}), [])
  const add = useCallback((sku:string) => dispatch({type: actions.ADD, payload: sku}), [])
  const del = useCallback((sku:string) => dispatch({type: actions.DELETE, payload: sku}), [])
  const clear = useCallback(() => dispatch({type: actions.CLEAR}), [])

  return {state, flip, add, del, clear}
} 

type productContextType = ReturnType<typeof useProductDisplay>

const initProductContext: productContextType = {
  state:initProductState,
  flip: () => {},
  add: (sku:string) => {},
  del: (sku:string) => {},
  clear: () => {},
}

export const ProductContext = createContext<productContextType>(initProductContext)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const ProductContextProvider = ({children, ...initProductState}: ChildrenType & productState): ReactElement =>{
  return (
    <ProductContext.Provider value={useProductDisplay(initProductState)}>
      {children}
    </ProductContext.Provider>
  )
}


export const handleTotalItems = (state:productState):number => {
  let total = 0
  state.fullCart.map((prod) => total += prod.quantity)
  return parseFloat(total.toFixed(2))
}
export const handleTotalPrice = (state:productState):number => {
  let total = 0
  state.fullCart.map((prod) => total += (prod.quantity * prod.price))
  return parseFloat(total.toFixed(2))
}

  
