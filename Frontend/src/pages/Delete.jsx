import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButtton from "../components/BackButtton";
const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/leads/${id}`)
      .then(() => {
        alert("lead deleted successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-6">
      <BackButtton></BackButtton>
      <div className="flex flex-col text-center  mx-auto border-2 border-sky-300 w-[600px] p-4 ">
        <h3>Are you sure u want to delete this lead?</h3>
        <button className="bg-sky-300 p-2 m-8" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Delete;
