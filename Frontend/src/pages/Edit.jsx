import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButtton from "../components/BackButtton";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");

  const [status, setStatus] = useState("");

  const updateLead = () => {
    const updatedLead = {
      name,
      email,
      company,
      status,
    };

    axios
      .put(`http://localhost:8000/leads/${id}`, updatedLead)
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/leads/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);

      setStatus(res.data.status);
    });
  }, [id]);

  return (
    <div className="m-6">
      <BackButtton />
      <h1 className="text-3xl my-4">Edit Lead</h1>

      <div className="flex flex-col justify-center mx-auto border-2 border-sky-400 rounded-xl w-[600px] p-4">
        {/* Name */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name:</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email:</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Company */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Company:</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        {/* Budget */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Budget:</label>
          <input
            type="number"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        {/* Status */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Status:</label>
          <select
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button onClick={updateLead} className="p-2 bg-sky-300 m-8 rounded-md">
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
