import React, { useState } from 'react'
import InputType from '../Form/InputType';
import API from '../../../services/API';
import { useSelector } from 'react-redux';

const ModalPro = () => {

    const [inventoryType,setInventoryType] = useState('in');
    const [bloodGroup,setBloodGroup] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [email,setEmail] = useState("");

    const {user} = useSelector((state) => state.auth);

    const handleModalSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!bloodGroup || !quantity){
                return alert("Please Provide All Fields");
            }

            const obj = {
                inventoryType,
                bloodGroup,
                quantity,
                email,
                organisation: user?._id,
                donar:user?._id
            }
            const {data} = await API.post('/inventory/create-inventory',obj);
            if(data?.success){
                alert('New Record created!');
                window.location.reload();
            }

        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
            window.location.reload();
        }
    }

  return (
    <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Manage Blood Record</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex mb-3'>
                        Blood Type : 
                        <div className='form-check ms-3'>
                            <input type='radio' name='bloodType' value="in" className='form-check-input' defaultChecked onChange={(e) => setInventoryType(e.target.value)}/>
                            <label htmlFor="in" className="form-check-label">IN</label>
                        </div>
                        <div className='form-check ms-3'>
                            <input type='radio' name='bloodType' value="out" className='form-check-input' onChange={(e) => setInventoryType(e.target.value)}/>
                            <label htmlFor="out" className="form-check-label">OUT</label>
                        </div>
                    </div>
                    <select className='form-select mb-3' aria-label="Default select example" onChange={(e) => setBloodGroup(e.target.value)}>
                        <option defaultValue={"Open this select menu"}>Open this select menu</option>
                        <option value={"O+"}>O+</option>
                        <option value={"O-"}>O-</option>
                        <option value={"AB+"}>AB+</option>
                        <option value={"AB-"}>AB-</option>
                        <option value={"A+"}>A+</option>
                        <option value={"A-"}>A-</option>
                        <option value={"B+"}>B+</option>
                        <option value={"B-"}>B-</option>
                    </select>
                    <InputType labelFor="Donar Email" labelText={"Donar Email"} inputType={"email"} name={"email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <InputType labelText={"Quantity (ML)"} labelFor={"quantity"} inputType={"number"} name={"quantity"} value={quantity}  onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default ModalPro