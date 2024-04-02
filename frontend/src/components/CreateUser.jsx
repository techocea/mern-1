const CreateUser = () => {
  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, photoURL);

    //create user object
    const user = { name, email, photoURL };
    console.log(user);

    fetch("https://example-1zyq.onrender.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          alert("User added successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleUser} className="flex flex-col gap-y-2 m-5">
          <h1 className="text-2xl font-semibold">Create a New User</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            className="p-3 border outline-0 border-slate-500"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
            className="p-3 border outline-0 border-slate-500"
          />
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Enter your photo URL"
            className="p-3 border outline-0 border-slate-500"
          />{" "}
          {/* later add choose file */}
          <input
            type="submit"
            value="Add New User"
            className="cursor-pointer bg-yellow-500 font-bold hover:bg-yellow-200 transition-all p-3 text-black"
          />
        </form>
      </div>
    </>
  );
};

export default CreateUser;
