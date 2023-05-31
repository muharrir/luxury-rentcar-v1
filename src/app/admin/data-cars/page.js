"use client";
import Image from "next/image";
import React, { useState } from "react";

export const metadata = {
  title: "Data Cars",
  description: "Generated by create next app",
};

function DataCars() {
  const [specCar, setSpecCar] = useState({
    carName: "",
    brandName: "",
    price: "",
  });

  const [fields, setFields] = useState([
    {
      dataSpec: "",
      timestamp: new Date().getTime(),
    },
  ]);

  const [image, setImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  console.log(specCar);
  console.log(fields);
  console.log(image);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSpecCar({
      ...specCar,
      [name]: value,
    });
  };

  const handleFields = (e, i) => {
    const { name, value } = e.target;
    let newFields = [...fields];
    newFields[i][name] = value;
    setFields(newFields);
  };

  const handleAddInput = () => {
    setFields([
      ...fields,
      {
        dataSpec: "",
        timestamp: new Date().getTime(),
      },
    ]);
  };

  const handleDelete = (i) => {
    let deleteFields = [...fields];
    deleteFields.splice(i, 1);
    setFields(deleteFields);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="my-10 ml-[90px] mr-5 lg:ml-[20%] lg:mr-[18%]">
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold">Input Cars Data</h1>
      </div>

      {/* CAR TYPE */}
      <div className="border-2 border-dashed border-black p-7 lg:p-10 rounded-lg mt-10">
        <form
          action=""
          className="grid grid-rows-1 lg:grid-cols-3 gap-4 lg:gap-10"
        >
          <div>
            <h4 className="">Car Name</h4>
            <input
              id="carName"
              name="carName"
              type="text"
              className="mt-2 focus:outline-none px-3 py-2 rounded-xl  focus:ring-2 focus:ring-blue-500 caret-blue-500 border-2 border-blue-500 w-full"
              onChange={handleInput}
            />
          </div>
          <div>
            <h4 className="">Brand Name</h4>
            <input
              id="brandName"
              name="brandName"
              type="text"
              className="mt-2 focus:outline-none px-3 py-2 rounded-xl  focus:ring-2 focus:ring-blue-500 caret-blue-500 border-2 border-blue-500 w-full"
              onChange={handleInput}
            />
          </div>
          <div>
            <h4 className="">Price</h4>
            <input
              id="price"
              name="price"
              type="number"
              className="mt-2 focus:outline-none px-3 py-2 rounded-xl  focus:ring-2 focus:ring-blue-500 caret-blue-500 border-2 border-blue-500 w-full"
              onChange={handleInput}
            />
          </div>
        </form>
      </div>

      {/* SPEC DATA INPUT */}
      <div className="relative mt-10 p-7 lg:p-10 border-2 border-dashed border-black rounded-lg">
        <h4 className=" text-xl text-center lg:text-start">
          Specification Data
        </h4>

        <form className="mt-20 space-y-6">
          {fields.map((v, i) => (
            <div className="flex gap-4" key={i}>
              <input
                key={v.timestamp}
                id="dataSpec"
                name="dataSpec"
                type="text"
                onChange={(e) => handleFields(e, i)}
                className="w-full focus:outline-none px-3 py-2 rounded-lg  focus:ring-2 focus:ring-blue-500 caret-blue-500 border-2 border-blue-500"
              />
              <div className=" w-11 h-10 rounded-lg items-center justify-center flex bg-red-500 text-red-900 font-semibold text-center text-2xl cursor-pointer">
                <button type="button" onClick={() => handleDelete(i)}>
                  -
                </button>
              </div>
            </div>
          ))}

          <div className="absolute top-[58px] right-7 lg:top-[70px] lg:right-10 w-8 h-10 lg:w-10 lg:h-10 rounded-lg items-center justify-center flex bg-green-500 text-green-900 font-semibold text-center text-2xl cursor-pointer">
            <button type="button" onClick={handleAddInput}>
              +
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 p-7 lg:p-10 border-2 border-dashed border-black rounded-lg">
        <form>
          <div className="flex">
            {imagePreview ? (
              <Image
                src={imagePreview}
                width={800}
                height={800}
                alt="ic-upload"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <Image
                src={"/assets/svgs/ic-upload.svg"}
                width={800}
                height={800}
                alt="ic-upload"
                className="w-20 h-20 rounded-full"
              />
            )}
            <input
              id="image"
              name="image"
              type="file"
              onChange={(e) => onImageUpload(e)}
              className="w-full"
            />
          </div>

          <div className="flex">
            {imagePreview ? (
              <Image
                src={imagePreview}
                width={800}
                height={800}
                alt="ic-upload"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <Image
                src={"/assets/svgs/ic-upload.svg"}
                width={800}
                height={800}
                alt="ic-upload"
                className="w-20 h-20 rounded-full"
              />
            )}
            <input
              id="image"
              name="image"
              type="file"
              onChange={(e) => onImageUpload(e)}
              className="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataCars;