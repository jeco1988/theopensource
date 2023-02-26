import FixedMenuLayout from './components/fixedmenulayout';
import React from 'react';
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <FixedMenuLayout></FixedMenuLayout>
      <Comments />
    </div>
  );
}

export default App;
