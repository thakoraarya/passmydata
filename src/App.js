import './App.css';
import Child1 from './components/alpha / Child1';
import { useState } from 'react';
import Child2 from './components/beta /Child2';

function App() {
  const [child, setchild1] = useState(['no child data here']);

  function toparent(inchild) {
    setchild1(inchild)
  }

  const datainchild1 = [
    'this is child01 ',
    'this is child02 ',
    'this is child03 ',
    'this is child04 ',
  ]
  const datainchild2 = [
    'this is 2nd child01 ',
    'this is 2nd child02 ',
    'this is 2nd child03 ',
    'this is 2nd child04 ',
  ]

  return (
    <div className="App flex justify-center h-screen w-screen bg-black gap-4 p-4 ">

        <Child1  fromchild={toparent} data={datainchild1} />


      <h1 className='bg-cyan-800 text-xl text-green-400 py-4 px-8 w-fit h-fit rounded-md'>
        {child}
      </h1>



        <Child2  fromchild2={toparent} data={datainchild2} />

    </div>
  );
}

export default App;

