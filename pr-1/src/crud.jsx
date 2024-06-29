import { useState } from "react"

const Crud = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    const [record,setRecord] = useState(data)
    const handlesubmit = (e) => {
        e.preventDefault()
        let obj = {                                                                                                 
            id : Math.floor(Math.random()*1000),name,phone,status:"Deactive",
        }
        let allrecord = [...record,obj];
        localStorage.setItem('users',JSON.stringify(allrecord))
        setRecord(allrecord)
        setName("")
        setPhone("")
    }
    return(
        <>
           <div align="center">
            
                <form onSubmit={handlesubmit}>
                    <label>Name : -  </label>
                    <input type="text" onChange={ (e) => setName(e.target.value)}/><br></br>
                    <label>Phone : -  </label>
                    <input type="text"onChange={ (e) => setPhone(e.target.value)} /><br></br>
                    <input type="button" value="submit" />
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.phone}</td>
                                        <td>
                                            <button>{val.status}</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
           </div>
        </>
    )
}
export default Crud