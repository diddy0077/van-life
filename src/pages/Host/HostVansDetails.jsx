import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

function HostVansDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/host-vans/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.vans[0]))
      .catch((error) => console.log("Error Fetching Van", error));
  }, [id]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg m-4 md:m-6 transition-colors duration-300">
      <Link
        to="/host/host-vans"
        className="flex items-center gap-2 mt-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <p className="border-b font-semibold text-sm">Back to all vans</p>
      </Link>

      <div className="flex flex-col md:flex-row items-start md:items-end gap-6 p-6 mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-full md:w-48 h-64 md:h-40 object-cover rounded-md"
        />
        <div className="flex flex-col items-start gap-2">
          <p className="bg-red-500 font-semibold text-sm md:text-md px-3 py-1 rounded-md text-white">
            {data.type}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {data.name}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-bold text-lg">${data.price}</span>/day
          </p>
        </div>
      </div>

      <div className="flex md:flex-row gap-3 mt-4 p-2 text-gray-700 dark:text-gray-300">
        <NavLink
          to={`/host/host-vans/${id}`}
          end
          className={({ isActive }) =>
            isActive
              ? "underline font-bold text-indigo-600 dark:text-indigo-400"
              : "hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Details
        </NavLink>
        <NavLink
          to={`/host/host-vans/${id}/pricing`}
          className={({ isActive }) =>
            isActive
              ? "underline font-bold text-indigo-600 dark:text-indigo-400"
              : "hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to={`/host/host-vans/${id}/photos`}
          className={({ isActive }) =>
            isActive
              ? "underline font-bold text-indigo-600 dark:text-indigo-400"
              : "hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Photos
        </NavLink>
      </div>

      <div className="mt-6">
        {data && <Outlet context={{ van: data }} />}
      </div>
    </div>
  );
}

export default HostVansDetails;
