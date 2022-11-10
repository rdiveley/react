function Employee(props) { 
    return (
      <>
            <h3>Employee {props.name}! </h3>
            {props.role ? <p>{ props.role}</p> : <p>No Role</p>}
      </>
    );
}
export default Employee;