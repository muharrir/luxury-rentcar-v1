import TextFormField from "@/components/textFormField";
import React from "react";

function Profile() {
  return (
    <div className="mx-20">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col rounded-2xl bg-gray-500 p-8 items-center">
          {/* Img */}
          <div className="flex justify-center items-center h-32 w-32 rounded-full bg-blue-500 ">
            <h1>IMAGE</h1>
          </div>
          <form className="space-y-2 mt-8">
            <TextFormField label={"Username"} type={"text"} />
            <TextFormField label={"Name"} type={"text"} />
            <TextFormField label={"Email"} type={"email"} />
            <TextFormField label={"Password"} type={"password"} />
          </form>
          <button className="bg-blue-500 mt-8 w-full py-2 rounded-lg shadow-lg shadow-blue-400">
            <h1 className="text-white font-semibold text-lg ">SUBMIT</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
