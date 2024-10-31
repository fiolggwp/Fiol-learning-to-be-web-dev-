import React, { useState } from 'react';
import App from './App/App';
import App2 from './App2';


const Index = () => {
  const [activeComponent, setActiveComponent] = useState();

  const renderComponent = () => {
  switch (activeComponent) {
    case 'app1':
      return <App />;
    case 'app2':
      return <App2 />;
    default:
      return (
        <h1>
        'Hello! choose App'
    </h1>
      )
  }
};

  return (
    <div>
      <div>
        <button type="button" className="btn btn-outline-primary m-3" onClick={() => setActiveComponent('app1')}>Show App 1</button>
        <button type="button" className="btn btn-outline-primary m-3" onClick={() => setActiveComponent('app2')}>Show App 2</button>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Index;
