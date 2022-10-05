import React, { useState } from 'react';;
import { Filter } from './Filter';
import { Products } from './Products';

function App() {
  const [filter, setFilter ]: any[] = useState('');
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <Products filterBy={filter} />
    </>
  );
}

export default App;
