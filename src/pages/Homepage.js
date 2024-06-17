import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import ModalPro from '../components/shared/modal/ModalPro';
import API from '../services/API';
import moment from "moment";

const Homepage = () => {
  const {loading,error,user} = useSelector((state) =>  state.auth);
  const [bloodRecord,setBloodRecord] = useState([]);

  const getBloodRecords = async() => {
    try {
      const {data} = await API.get('/inventory/get-inventory')
      if(data?.success){
       console.log(data);
       setBloodRecord(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBloodRecords();
  },[])

  return (
    <Layout>
      {error && <>{alert(error)}</>}
      {
        loading ? (<Spinner/>):
        (
          <div className='container'>
            <h4 className='ms-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='fa-solid fa-plus text-success py-4'></i>Add Inventory</h4>
            <table className='table'>
            <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Email</th>
                  <th scope="col">TIme & Date</th>
                </tr>
              </thead>
              <tbody>
              {
                bloodRecord.map((record,index) => 
                    (
                      <tr key={index}>
                          <td>{record.bloodGroup}</td>
                          <td>{record.inventoryType}</td>
                          <td>{record.quantity}</td>
                          <td>{record.email}</td>
                          <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                      </tr>
                    )
                )
              }
              </tbody>
            </table>
          </div>
        )
      }
     <ModalPro/>
    </Layout>
  )
}

export default Homepage