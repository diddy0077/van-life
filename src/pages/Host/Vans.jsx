import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/host/host-vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans))
      .catch((err) => console.log("Error fetching vans", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl md:text-3xl my-6 text-center md:text-left">
        Your Listed Vans
      </h1>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {data.map((item) => (
            <Link key={item.id} to={`/host/host-vans/${item.id}`}>
              <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-800 rounded-lg p-4 items-center md:items-start gap-4 hover:shadow-lg transition-shadow">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full md:w-32 h-40 md:h-20 object-cover rounded-md"
                />
                <div className="text-center md:text-left">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-300">${item.price}/day</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center mt-6">Loading...</p>
      )}
    </div>
  );
}

export default Vans;
