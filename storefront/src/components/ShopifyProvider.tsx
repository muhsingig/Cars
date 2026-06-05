"use client";
import React from "react";

export default function ShopifyProvider({ children }: { children: React.ReactNode }) {
  // Temporary bypass for Shopify to remove all integration issues.
  return <>{children}</>;
}
