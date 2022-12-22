import React from 'react';
import useAnimalsSearch from './hooks/useAnimalsSearch';

function App() {
  const {animals, handleSearch} = useAnimalsSearch();
  return (
    <div>
      <h3>Animal Farm</h3>
      <input id="search" type="text" placeholder='Поиск' onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {animals.map((animal: any) => {
          return <div key={animal.id}>
            <li>
              <strong>{animal.type}</strong>
              <div>{animal.name}</div>
              <div>{animal.age}</div>
            </li>
          </div>
        })}
        {animals.length === 0 && "No animals found"}
      </ul>
    </div>
  )
}

export default App;
