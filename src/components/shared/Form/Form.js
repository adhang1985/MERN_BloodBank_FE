import React, { useState } from 'react'
import InputType from './InputType'
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister } from '../../../services/authServices';

const Form = ({submitBtn,formTitle,formType}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("donar");
    const [name,setName] = useState("");
    const [organizationName,setOrganizationName] = useState("");
    const [hospitalName,setHospitalName] = useState("");
    const [webSite,setWebSite] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formType === "Login"){
            return handleLogin(email,password,role);
        }
        else if(formType === "Register"){
            return handleRegister(email,password,name,role,phone,address,hospitalName,organizationName,webSite);
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1 className='text-center'>{formTitle}</h1>
            <hr/>
            <div className='d-flex mb-3'>
                 <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" name="role" id="adminRole" value="admin" onChange={(e) =>  setRole(e.target.value)}/>
                    <label className="form-check-label" htmlFor="adminRole">
                        Admin
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" name="role" id="donarRole" defaultChecked value="donar" onChange={(e) =>  setRole(e.target.value)}/>
                    <label className="form-check-label" htmlFor="donarRole">
                        Donar
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" name="role" id="organisationRole" value="organisation" onChange={(e) =>  setRole(e.target.value)}/>
                    <label className="form-check-label" htmlFor="organisationRole">
                       Organisation
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" name="role" id="hospitalRole" value="hospital" onChange={(e) =>  setRole(e.target.value)}/>
                    <label className="form-check-label" htmlFor="hospitalRole">
                    Hospital
                    </label>
                </div>
            </div>

            {
                formType === "Login" ?
                <>
                <InputType labelFor="email" labelText="Email Id" inputType="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <InputType labelFor="password" labelText="Password" inputType="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </>
                :
                <>
                    <InputType labelFor="email" labelText="Email Id" inputType="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <InputType labelFor="password" labelText="Password" inputType="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {
                        (role === "admin" || role === "donar") && 
                        <InputType labelFor="name" labelText="Name" inputType="text" name="name"  value={name} onChange={(e) => setName(e.target.value)}/>
                    }
                    {
                        (role === "organisation") && 
                        <InputType labelFor="organizationName" labelText="Organization Name" inputType="text" name="organizationName"  value={organizationName} onChange={(e) => setOrganizationName(e.target.value)}/>
                    }
                    {
                        (role === "hospital") && 
                        <InputType labelFor="hospitalName" labelText="Hospital Name" inputType="text" name="hospitalName"  value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}/>
                    }
                    
                    <InputType labelFor="webSite" labelText="Website" inputType="text" name="webSite"  value={webSite} onChange={(e) => setWebSite(e.target.value)}/>
                    <InputType labelFor="address" labelText="Address" inputType="text" name="address"  value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <InputType labelFor="phone" labelText="Phone" inputType="text" name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </>
            }
            


            <div className='d-flex justify-content-between'>
                {
                    formType === "Login" ?
                    (<p>Not Registered Yet ? <Link to={'/register'}>Register here!</Link></p>)
                    :
                    (<p>Already User ? <Link to={'/login'}>Login here!</Link></p>)
                }
                <button className='btn btn-primary' type='submit'>
                    {submitBtn}
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form