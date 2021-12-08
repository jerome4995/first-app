import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './table.css';
import Swal from 'sweetalert2';

//firebase
import { customerRef } from '../../firebase/Firebase';


const CustomerTable = ({customerDetails}) => {

    const [refresh, setRefresh] = useState(false);

    const onDelete =  (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          
          if (result.isConfirmed) {
              customerRef.doc(id).delete().then(() => {
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                    window.location.replace('/customerlist')
                    // setRefresh(!refresh);
              }).catch((error) => {
                  // console.error("Error removing document: ", error);
                });
            
           
          }
        })
      }  
      
    useEffect(() => { },[refresh]);

    return (
            <div className="tableContainer" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {customerDetails.map(item => 
                        <tr key={item.id}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Phone">{item.phoneNumber}</td>
                        <td data-label="Age">{item.age}</td>
                        <td data-label="Address">{item.address}</td>
                        <td data-label="Action">
                        <Link to={`/viewcustomer/${item.id}`} style={{textDecoration:"none"}}><i class="green eye icon"></i></Link>&nbsp;
                        <Link to={`/editcustomer/${item.id}`} style={{textDecoration:"none"}}><i class="yellow edit icon"></i></Link>&nbsp;
                        <i class="red trash alternate icon" onClick={() => onDelete(item.id)}></i>                     
                        </td>
                        </tr>
                        )} 
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable;
