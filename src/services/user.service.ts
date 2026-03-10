
import { cookies } from "next/headers";

const AUTH_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const userService = {
  getSession : async function () {
    try {
          const cookieStore = await cookies();
          const res = await fetch(`http://localhost:5000/api/auth/get-session`,{
            headers : {
              Cookie : cookieStore.toString(),
            },
            cache : "no-store"
          });

          const session = await res.json();
          // console.log('get Session => ',session);
          if(session==null){
            return {data : null, error : {message : "Session is missing"}};
          }

          return {data : session, error : null};
    } catch (error) {
      console.log(error);
      return {data : null, error : {message : "Something Went Wrong . The error => ",details : error}}
    }

  }
}