import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loader = useLoaderData();
  const handleUserUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;

    const loadedUser = { name, email, photoURL };
    fetch(`http://localhost:5555/users/${loader._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loadedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="m-5">
      <h2>Update information about {loader.name}</h2>
      <form onSubmit={handleUserUpdate} className="flex flex-col gap-y-2 mt-5">
        <h1 className="text-2xl font-semibold">Update User Details</h1>
        <input type="text" name="name" id="name" defaultValue={loader?.name} />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={loader?.email}
        />

        {/* later add choose file */}
        <input
          type="submit"
          value="Update Profile"
          className="cursor-pointer bg-yellow-500 font-bold hover:bg-yellow-200 transition-all p-3 text-black"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
