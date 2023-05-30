import Image from "next/image";
import React from "react";

export default function UploadPhoto({ onChange, img }) {
  return (
    <>
      {img ? (
        <div className="mt-4 flex justify-center items-center h-24 w-24 rounded-full">
          <Image
            src={img}
            width={800}
            height={800}
            alt="ic-upload"
            className="w-24 h-24 rounded-full"
          />
        </div>
      ) : (
        <div className="mt-4 flex justify-center items-center h-24 w-24 rounded-full bg-white border border-blue-500">
          <Image
            src={"/assets/svgs/ic-upload.svg"}
            width={800}
            height={800}
            alt="ic-upload"
            className="w-24 h-24 rounded-full"
          />
        </div>
      )}
      <input
        type="file"
        accept="image/jpg, image/png, image/jpeg"
        className="mt-4"
        onChange={onChange}
      />
      <p className="mt-2 text-sm text-gray-400">Format file jpg, jpeg, png.</p>
    </>
  );
}
