
const Funrecord = ({data}) => {
    return(
       
            <div>
                <h1 align="center">Function  Components</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Grid</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Empdeg</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Department</th>
                        <th scope="col">Country</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Area</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         data.map((val)=>{
                            return(
                                <tr key={val.empid}>
                                  <th scope="row">{val.empid}</th>
                                  <td>{val.empname}</td>
                                  <td>{val.empemail}</td>
                                  <td>{val.empphone}</td>
                                  <td>{val.empdeg}</td>
                                  <td>{val.empsalary}</td>
                                  <td>{val.empdepartment}</td>
                                  <td>{val.empaddress.country}</td>
                                  <td>{val.empaddress.state}</td>
                                  <td>{val.empaddress.city}</td>
                                  <td>{val.empaddress.area}</td>
                                </tr>
                            )
                         })
                       }
                    </tbody>
                    </table>
            </div>
        
    )
}
export default Funrecord