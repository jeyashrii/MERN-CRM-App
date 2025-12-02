// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { BsInfoCircle } from "react-icons/bs";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDelete } from "react-icons/md";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/books/")
//       .then((res) => {
//         setData(res.data.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   console.log(data.length);
//   return (
//     <div>
//       <div className="flex justify-between text-3xl m-4">
//         <h1>Books list</h1>
//         <Link to={`/books/create`}>Add</Link>
//       </div>

//       {!data?.length ? (
//         <p>no data found</p>
//       ) : (
//         <table className="w-full border-separate border-spacing-2">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 rounded-md">No</th>
//               <th className="border border-slate-600 rounded-md">Title</th>
//               <th className="border border-slate-600 rounded-md max-md:hidden">
//                 Author
//               </th>
//               <th className="border border-slate-600 rounded-md max-md:hidden">
//                 Published year
//               </th>
//               <th className="border border-slate-600 rounded-md max-md:hidden">
//                 Operations
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => {
//               return (
//                 <tr key={index} className="h-8">
//                   <td className="border border-slate-700 rounded-md text-center">
//                     {index + 1}
//                   </td>
//                   <td className="border border-slate-700 rounded-md text-center">
//                     {item.title}
//                   </td>
//                   <td className="border border-slate-700 rounded-md text-center max-md:hidden">
//                     {item.author}
//                   </td>
//                   <td className="border border-slate-700 rounded-md text-center max-md:hidden">
//                     {item.publishedYear}
//                   </td>
//                   <td className="border border-slate-700 rounded-md text-center max-md:hidden">
//                     <div className="flex justify-center gap-x-4">
//                       <Link to={`/books/details/${item._id}`}>
//                         <BsInfoCircle></BsInfoCircle>
//                       </Link>
//                       <Link to={`/books/edit/${item._id}`}>
//                         <AiOutlineEdit></AiOutlineEdit>
//                       </Link>
//                       <Link to={`/books/delete/${item._id}`}>
//                         <MdOutlineDelete></MdOutlineDelete>
//                       </Link>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/leads/")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="flex justify-between text-3xl m-4 bg-sky-100 rounded-xl px-4 py-2">
        <h1 className="rounded-md px-4 py-2">Leads List</h1>
        <Link className="bg-sky-300 rounded-md px-4 py-2" to={`/leads/create`}>
          Add
        </Link>
      </div>

      {!data?.length ? (
        <p>No leads found</p>
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md bg-sky-300  ">
                No
              </th>
              <th className="border border-slate-600 rounded-md bg-sky-300 ">
                Name
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden bg-sky-300">
                Email
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden bg-sky-300">
                Company
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden bg-sky-300">
                Budget
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden bg-sky-300">
                status
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden bg-sky-300">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} className="h-8 bg-sky-100">
                  <td className="border border-slate-700 rounded-md text-center ">
                    {index + 1}
                  </td>

                  <td className="border border-slate-700 rounded-md text-center">
                    {item.name}
                  </td>

                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {item.email}
                  </td>

                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {item.company}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {item.budget}
                  </td>
                  <td
                    className={`border border-slate-700 rounded-md text-center  text-white ${
                      {
                        New: "bg-blue-500",
                        Contacted: "bg-yellow-500",
                        Qualified: "bg-green-600",
                        Closed: "bg-red-600",
                      }[item.status] || "bg-gray-500"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/leads/details/${item._id}`}>
                        <BsInfoCircle />
                      </Link>

                      <Link to={`/leads/edit/${item._id}`}>
                        <AiOutlineEdit />
                      </Link>

                      <Link to={`/leads/delete/${item._id}`}>
                        <MdOutlineDelete />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
