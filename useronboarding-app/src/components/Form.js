import React, {useState, useEffect} from "react"
import * as yup from "yup"
import axios from "axios"

        
    })
    console.log(props)
    //does yup handle the changes? 
    const formSchema = yup.object().shape({
        name:yup.string().required("yo, where's your name?"),
        email:yup
        .string()
        .email("don't try a fake address, we will find you.")
        .required("you've done it now, Tracing IP address..."),
        terms: yup.boolean().oneOf([true], "Need to sign your soul away first."),
        


    })  


    
    const Form = (props)=>{
        const [formState, setFormState] = useState({
            name:"",
            email:"",
            password:"",
            tos: "",
            submitted: ""
        })
        const[errprs, setErrors] = useState({
          name: "",
          email: "",
          role:"",
          password: "",
          terms: ""




        })
        const [buttonDisabled, setButtonDisabled] = useState(true);
        
        const[postRequest, setPostRequest]=useState();

        useEffect(()=>{
          formSchema.isValid(formState).then(valid =>{
            setButtonDisabled            
          })


        })
         
        return(
            <form >
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
              />
            </label>
            <label htmlFor="motivation">
              Why would you like to help?
              <textarea
                name="motivation"
              />
            </label>
            <label htmlFor="positions">
              What would you like to help with?
              <select id="positions" name="positions">
                <option value="Newsletter">Newsletter</option>
                <option value="Yard Work">Yard Work</option>
                <option value="Administrative Work">Administrative Work</option>
                <option value="Tabling">Tabling</option>
              </select>
            </label>
            <label htmlFor="terms" className="terms">
              <input
                type="checkbox"
                name="terms"
                checked={true} {/* will change later with state */}
              />
              Terms and Conditions
            </label>
            <button>Submit</button>
          </form>);//end return
    }