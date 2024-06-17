import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const Donar = () => {

    const [donarData,setDonarData] = useState([]);

    const getDonars = async() => {
        try {
            const {data} = await API.get('/inventory/get-donars');
            if(data?.success){
                setDonarData(data?.donars);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDonars();
    },[])

  return (
   <Layout>
        <div className='container'>
        <h1>Donar Page</h1>
        <table className='table'>
            <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
              {
                donarData.map((record,index) => 
                    (
                      <tr key={index}>
                          <td>{record.name || record.organizationName + "(ORG)"}</td>
                          <td>{record.email}</td>
                          <td>{record.phone}</td>
                          <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                      </tr>
                    )
                )
              }
              </tbody>
            </table>
        </div>
   </Layout>
  )
}

export default Donar