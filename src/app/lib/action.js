"use server";

import { redirect } from "next/navigation";
import { users } from "./mockUsers";

export async function authenticate(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      // Redirect to dashboard or profile
      redirect("/dashboard");
    }
  });
  return "Invalid credentials. Try again!";
}
