import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./AddRecord.css";

function AddRecord({ }) {
  const [Aname, AsetName] = useState('');
  const [Aphone, AsetPhone] = useState('');
  const [Aspeed, AsetSpeed] = useState('');
  const [Apop_name, AsetPop_name] = useState('');
  const [Adslam_hostname, AsetDslam_hostname] = useState('');
  const [Aframe, AsetFrame] = useState('');
  const [Aattainable_speed, AsetAttainable_speed] = useState('');
  const navigate = useNavigate();


  const handleFormSubmit = async (e) => {
    // Process the form data, e.g., add the record to your table
    e.preventDefault()
    try {
      await axios.post(`http://127.0.0.1:8000/employee/profiles/`, 
      {name:Aname,phone:Aphone,speed:Aspeed,pop_name:Apop_name,dslam_hostname:Adslam_hostname,frame:Aframe,attainable_speed:Aattainable_speed}); 
          // Clear input values after successful submission
        AsetName('');
        AsetPhone('');
        AsetSpeed('');
        AsetPop_name('');
        AsetDslam_hostname('');
        AsetFrame('');
        AsetAttainable_speed('');
        navigate('/home');
    //   fetchData();
    } catch (error) {
      console.error("Error adding record:", error);
      console.log("Error details:", error.response.data);

    }
// 
    // console.log("New record:", data);
    // setShowForm(false);

    
};

  return (
    <div className="add-record-form">
      <h2>Add Record</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={Aname}
          onChange={(e) => AsetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={Aphone}
          onChange={(e) => AsetPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="speed"
          value={Aspeed}
          onChange={(e) => AsetSpeed(e.target.value)}
        />
        <input
          type="text"
          placeholder="pop_name"
          value={Apop_name}
          onChange={(e) =>  AsetPop_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="dslam_hostname"
          value={Adslam_hostname}
          onChange={(e) => AsetDslam_hostname(e.target.value)}
        />
        <input
          type="text"
          placeholder="frame"
          value={Aframe}
          onChange={(e) => AsetFrame(e.target.value)}
        />
           <input
          type="text"
          placeholder="attainable_speed"
          value={Aattainable_speed}
          onChange={(e) => AsetAttainable_speed(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddRecord;
