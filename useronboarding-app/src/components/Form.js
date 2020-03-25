import React, {useState} from "react"
import * as yup from "yup"

const Form = (props)=>{
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        tos: "",
        submitted: ""
        
    })
    console.log(props)
    //does yup handle the changes? 
    const formSchema = yup.object().shape({
        name:yup.string().required("yo, where's your name?"),
        email:yup
        .string()
        .email("don't try a fake address, we will find you.")
        .required("you've done it now, Tracing IP address"),
        terms: yup.boolean().oneOf([true], "Need to sign your soul away.")    

    })  


    return


    //return

}//function