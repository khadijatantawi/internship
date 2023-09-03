// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  // State variables to manage data and form inputs
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [uname, usetName] = useState("");
  const [uphone, usetPhone] = useState("");
  const [uspeed, usetSpeed] = useState("");
  const [upop_name, usetPop_name] = useState("");
  const [udslam_hostname, usetDslam_hostname] = useState("");
  const [uframe, usetFrame] = useState("");
  const [uattainable_speed, usetAttainable_speed] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/employee/profiles/"
      );
      setData(response.data);
      setFilteredData(response.data); // Initialize both data and filteredData
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter data based on search query

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  const handleSearch = async () => {
    await fetchData(); // Re-fetch data
    setSearchQuery(""); // Clear the search query
  };

  // Handle deletion of a record
  const handleDelete = async (id) => {
    // Make a DELETE request to your delete endpoint
    try {
      await axios.delete(`http://127.0.0.1:8000/employee/profiles/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  // Handle edit button click
  const handleEdit = async (id) => {
    setEditId(id);
    // Fetch specific profile data for editing
    axios
      .get("http://127.0.0.1:8000/employee/profiles/" + id + "/")
      .then((res) => {
        console.log(res);
        // Update state variables with fetched data
        usetName(res.data.name);
        usetPhone(res.data.phone);
        usetSpeed(res.data.speed);
        usetPop_name(res.data.pop_name);
        usetDslam_hostname(res.data.dslam_hostname);
        usetFrame(res.data.frame);
        usetAttainable_speed(res.data.attainable_speed);
      });
  };

  // Handle updating an edited record
  const handleUpdate = async () => {
    try {
      // Send updated data to the server
      await axios
        .put(`http://127.0.0.1:8000/employee/profiles/` + editId + "/", {
          name: uname,
          phone: uphone,
          speed: uspeed,
          pop_name: upop_name,
          dslam_hostname: udslam_hostname,
          frame: uframe,
          attainable_speed: uattainable_speed,
        })
        .then((res) => {
          console.log(res);
        });
      fetchData();
      setEditId(-1);
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  return (
    <div className="web">
      {/* Navbar */}

      <Navbar></Navbar>

      {/* Title */}
      <div className="title">{/* <h1>Profile Managment</h1> */}</div>

      {/* Table */}
      <div className="search-container">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={handleSearch}
          style={{ width: "40px", color: "000000", marginLeft: "10px" }}
        />
      </div>
      <div className="centered-container ">
        <table className="centered-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>phone</th>
              <th>Speed</th>
              <th>pop_name</th>
              <th>dslam_hostname</th>
              <th>frame</th>
              <th>attainable_speed</th>
              <th colSpan="2"> Action </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) =>
              item.id === editId ? (
                <tr>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={uname}
                      onChange={(e) => usetName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={uphone}
                      onChange={(e) => usetPhone(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={uspeed}
                      onChange={(e) => usetSpeed(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={upop_name}
                      onChange={(e) => usetPop_name(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={udslam_hostname}
                      onChange={(e) => usetDslam_hostname(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={uframe}
                      onChange={(e) => usetFrame(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="small-input"
                      type="text"
                      value={uattainable_speed}
                      onChange={(e) => usetAttainable_speed(e.target.value)}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => handleUpdate(item.id)}
                    />
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.speed}</td>
                  <td>{item.pop_name}</td>
                  <td>{item.dslam_hostname}</td>
                  <td>{item.frame}</td>
                  <td>{item.attainable_speed}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(item.id)}
                      style={{ color: "#1c84d4" }}
                    />
                  </td>
                  <td>
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(item.id)}
                      style={{ color: "#db2e3f" }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer>
        <p className="footer">&copy; 2023 My Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
