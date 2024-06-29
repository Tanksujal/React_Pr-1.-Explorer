import { Component } from "react";
import Record from "./record";
class Data extends Component{

    constructor()
    {
        super();
        this.state = {
            records : [
                {
                    grid : 1,
                    name : 'kishan',
                    email : 'kishan@gmail.com',
                    password : 'kishan@123',
                    course : ["html,","css,","bootstrap,","js"],
                    city : "surat"
                },
                {
                    grid : 2,
                    name : 'jay',
                    email : 'jay@gmail.com',
                    password : 'jay@123',
                    course : ["photoshop,","figma,","illustrator,","adobe xd"],
                    city : "rajkot"
                },
                {
                    grid : 3,
                    name : 'ajay',
                    email : 'ajay@gmail.com',
                    password : 'ajay@123',
                    course : ["html,","css,","bootstrap,","nodejs"],
                    city : "amareli"
                },
                {
                    grid : 4,
                    name : 'nisha',
                    email : 'nisha@gmail.com',
                    password : 'nisha@123',
                    course : ["html,","css,","bootstrap,","python"],
                    city : "vadodara"
                }
            ]
        }
    }
    render()
    {
        return(
            <Record record={this.state.records}/>
        )
    }
}
export  default Data