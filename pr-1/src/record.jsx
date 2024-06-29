import { Component } from "react";

class Record extends Component{
    constructor(props)
    {
        super();
        this.state = {
            record : props.record
        }
    }
    render()
    {
        return(
            <div>
                <h1 align="center">Class  Components</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Grid</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Course</th>
                        <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         this.state.record.map((val)=>{
                            return(
                                <tr key={val.grid}>
                                  <th scope="row">{val.grid}</th>
                                  <td>{val.name}</td>
                                  <td>{val.email}</td>
                                  <td>{val.password}</td>
                                  <td>{val.course}</td>
                                  <td>{val.city}</td>
                                </tr>
                            )
                         })
                       }
                    </tbody>
                    </table>
            </div>
        )
    }
}
export default Record