import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from './components/EditEmployee';
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

  function updateEmployee(id, newName, newRole) { 
    const updatedEmployees = employees.map((employee) => { 
      if (id == employee.id) { 
        return {...employee, name: newName, role: newRole}
      }
      return employee
    });
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img) { 
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])//adding to the array, so put the old one in, add the new one
  }
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
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );

              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={ newEmployee} />
        </>
      ) : (
        <p>can't see em</p>
      )}
    </div>
  );
            
}

export default App;
