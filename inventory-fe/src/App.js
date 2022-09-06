import React, { useState } from 'react';

import { InventoryForm } from './inventory-form';
import InventoryTable from './inventory'
import './App.css';


function App() {

  const [owners, setOwners] = useState(["Kyle O'Connor", "Other"]);
  const [projects, setProjects] = useState(["Project 1", "Project 2"])
  const [inventory, setInventory] = useState([])

  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <InventoryForm 
        owners={owners} 
        projects={projects} 
        setInventory={setInventory}
        inventory={inventory}/>

      <InventoryTable 
        inventory={inventory}
        setInventory={setInventory} />
    </div>
  );
}

export default App;
