import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
 
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  return (
            <div className="App" >
            
              {showEmployees ? (
        <>
          <input type="text" onChange={(e) => { 
            setRole(e.target.value);
          } } />
                  <Employee name="Ray" role="Developer" />
                  <Employee name="Joe" />
                  <Employee name="John" />
                  <Employee role={role} />
                  <Employee name="Marie" />
                </>
              ) : (
                <p>You cannot see any of the employees</p>
              )}
            </div>
          );
}

export default App;
