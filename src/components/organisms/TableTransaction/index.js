import React from "react";
import HeadTransaction from "./HeadTransaction";
import BodyTransaction from "./BodyTransaction";
import dataTransaction from "../../../data/dataTransaction.json";

export default function TableTransaction() {
  return (
    <table class="w-full text-sm text-left text-gray-500">
      {/* Table Head */}
      <HeadTransaction />
      {/* Table Body  */}
      {dataTransaction.transaction.map((v, i) => (
        <BodyTransaction
          id={v.id}
          name={v.name}
          total_price={v.total_price}
          rental_date={v.rental_date}
          status={v.status}
          key={v.id}
        />
      ))}
    </table>
  );
}
