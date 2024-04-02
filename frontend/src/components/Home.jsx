import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (_id) => {
    fetch(`https://example-1zyq.onrender.com/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filter = users.filter((user) => user._id !== _id);
        setUsers(filter);
      });
  };
  return (
    <div className="m-5">
      <h3 className="font-bold">Total registered users: {users.length}</h3>
      <div className="grid grid-cols-3 gap-8">
        {users.map((user) => (
          <div key={user._id}>
            <div className="flex flex-col justify-center gap-y-2 items-center ">
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-[200px] h-[250px] object-contain rounded-2xl"
              />
              <h1>Name: {user.name}</h1>
              <div className="flex justify-around gap-5">
                {/* <Link
                  to={`/update-user/${user._id}`}
                  className="border border-yellow-500 text-yellow-500 font-semibold p-2"
                >
                  Update
                </Link> */}
                <button
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                  className="border-0 bg-[#F32013] text-white font-semibold p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
