import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Update
      </button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <form onSubmit={(e) => { 
            handleClose();
            e.preventDefault();
            props.updateEmployee(props.id,name,role);
          }} id='editmodal' className="w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Full Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="Full Name"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                         />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                        Role
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="role" 
                        type="text" 
                        placeholder="Role" 
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value)
                        }}
                         />
                </div>
               
            </form>
        </Modal.Body>
        <Modal.Footer>
          
          <button className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
            onClick={handleClose} >Close</button>
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            form='editmodal' >Update</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;