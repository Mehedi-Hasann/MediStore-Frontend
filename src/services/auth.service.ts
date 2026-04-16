import { cookies } from "next/headers"

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authService = {
  loginUser : async function (data: {email: string, password: string}) {
    try {
      console.log(data);
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/auth/login`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString(),
        },
        body : JSON.stringify(data)
      })

      const result = await res.json();
      console.log(result);

      return {data : result, error : null}

    } catch (error) {
      return {data : null, error : {message : "Login Failed"}}
    }
  }
}