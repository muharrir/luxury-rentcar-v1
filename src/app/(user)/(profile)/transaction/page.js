import React from "react";
import CardTransaction from "./cardTransaction";

export const metadata = {
  title: "Transaction",
  description: "Generated by create next app",
};

function Transaction() {
  return (
    <div className="lg:mb-0 lg:mt-10 lg:ml-[25%] w-full select-none">
      <h1 className="text-4xl font-bold text-indigo-950">My Transactions</h1>
      <p className="mt-2 text-gray-400">
        This is your transactions <br /> thanks for choosing our best cars
      </p>

      <CardTransaction />
    </div>
  );
}

export default Transaction;
