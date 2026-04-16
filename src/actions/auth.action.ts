"use server"

import { authService } from "@/services/auth.service"

export const loginUser = async(value : {email : string, password : string}) => {
  const res = await authService.loginUser(value);
  return res;
}