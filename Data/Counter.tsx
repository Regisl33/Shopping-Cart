import { ReactNode}from 'react';
import { useCounter } from './CounterContext';


type ChildrenType = {
  children: (num:number) => ReactNode
}


const Counter = ({children}: ChildrenType) => {
  //Voici comment importer les donnée a l'aide du custom Hook
  const { count, increment, decrement} = useCounter()

  return (
    <>
    <h1>{children(count)}</h1>
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
      
    </>
  );
};

export default Counter;