import React from 'react';

function Food(props){
  console.log(props);
  return <h3>I like Potato</h3>
}

function App(){
  return(
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" something={true} papapapapa={['hello', 1, 2, 3, 4, true]} />
    </div>
  );
}

export default App;