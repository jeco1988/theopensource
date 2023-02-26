import FixedMenuLayout from './components/fixedmenulayout';
import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <FixedMenuLayout></FixedMenuLayout>
    </div>
  );
}

export const getProjects = async () => {
  const response = await axios.get('/api/projects');
  return response.data;
};

export default App;
