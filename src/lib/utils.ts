import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clearToken() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("user_data");
}

export function getToken() {
  try {
    const idToken = localStorage.getItem("id_token");
    return idToken;
  } catch (err) {
    clearToken();
    return "";
  }
}

export function getUserData() {
  try {
    const userData = localStorage.getItem("user_data");
    return userData;
  } catch (err) {
    clearToken();
    return {};
  }
}
