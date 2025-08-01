"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
const DashboardComp = dynamic(() => import("./Dashboard"));
const CartComp = dynamic(() => import("./Cart"));
const ProductComp = dynamic(() => import("./Product"));

export { Navbar, DashboardComp, CartComp, ProductComp };
