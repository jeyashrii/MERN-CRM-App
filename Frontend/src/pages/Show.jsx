import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButtton";
import { useParams } from "react-router-dom";
import axios from "axios";

const LeadShow = () => {
  const [lead, setLead] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/leads/${id}`)
      .then((res) => {
        setLead(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl mb-4">Lead Details</h1>

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Lead ID:</span>
          {lead._id}
        </div>

        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Name:</span>
          {lead.name}
        </div>

        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Email:</span>
          {lead.email}
        </div>

        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Status:</span>

          <span
            className={`px-3 py-1 rounded-lg text-white ${
              {
                New: "bg-blue-500",
                Contacted: "bg-yellow-500",
                Qualified: "bg-green-600",
                Closed: "bg-red-600",
              }[lead.status] || "bg-gray-500"
            }`}
          >
            {lead.status}
          </span>
        </div>

        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Created At:</span>
          {lead.createdAt && new Date(lead.createdAt).toString()}
        </div>

        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Updated At:</span>
          {lead.updatedAt && new Date(lead.updatedAt).toString()}
        </div>
      </div>
    </div>
  );
};

export default LeadShow;
