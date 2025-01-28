// "use client";
import React from "react";
import StremeComponent from "../../../components/streme";

export default async function page({ params }) {
  const id = (await params).id;
  return (
    <div className="p-4">
      <h1>Page</h1>
      <StremeComponent id={id} />
    </div>
  );
}
