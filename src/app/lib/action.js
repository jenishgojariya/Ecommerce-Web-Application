"use server";

import { redirect } from "next/navigation";

export async function authenticate(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "jenishgojariya@gmail.com" && password === "123") {
    // Redirect to dashboard or profile
    redirect("/dashboard");
  }

  return "Invalid credentials. Try again!";
}
