// "use client";
import React from "react";
import StremeComponent from "../../../components/streme";
import { currentUser } from "@clerk/nextjs/server";

export default async function page({ params }) {
  const id = (await params).id;

  const user = await currentUser();
  console.log("Backend", user);

  return (
    <div className="p-4">
      <h1>Page</h1>
      <StremeComponent
        id={id}
        clerkUser={{
          id: user.id,
          name: user.firstName,
          token: user?.publicMetadata.token,
        }}
      />
    </div>
  );
}
