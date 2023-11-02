"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

function SubscriptionProvider() {
  const { data: session } = useSession();
  useEffect(() => {}, []);
  return <div>SubscriptionProvider</div>;
}

export default SubscriptionProvider;
