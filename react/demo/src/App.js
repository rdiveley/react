import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
 
  const showEmployees = true;
 
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Ray',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg',
    },
    {
      id: 2,
      name: 'Anne',
      role: 'tester',
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    },

    {
      id: 3,
      name: 'Marie',
      role: 'director',
      img: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg',
    },

    {
      id: 4,
      name: 'John',
      role: 'dba',
      img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
    },
    {
      id: 5,
      name: 'Joan',
      role: 'Project manager',
      img: 'https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg',
    },
  ]);
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>can't see em</p>
      )}
    </div>
  );
            
}

export default App;
