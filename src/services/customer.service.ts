import { env } from "@/env";
import { cookies } from "next/headers";
import { medicineService } from "./medicine.service";
import { updateTag } from "next/cache";
import { Address, Order } from "@/types/routes.type";

const API_URL = env.API_URL;

export interface EditInfo{
  name : string,
  email : string
}

export const customerService = {
  getMyInfo : async function () {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/me`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        }
      })
      const data = await res.json();
    
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Error Happen Due to Internal Server Error for getting MyInfo"}}
    }
  },

  editMyInfo : async function (payload : EditInfo) {
    // console.log(payload);
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/profile`,{
        method : "PUT",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify(payload)
      })
      const data = await res.json();
    
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Internal Server Error"}}
    }
  },

  getMyCart : async function () {
    try {
      // const medicine = await medicineService.getMedicineById();
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/cart`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        next : {
          tags : ["addToCartTag"]
        }
      })
      const data = await res.json();
      // console.log(data);
      
    
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Internal Server Error"}}
    }
  },

  getMySingleCart : async function (id : string) {
    try {
  
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/cart/${id}`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        }
      })
      const data = await res.json();
      console.log(data);
      
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Internal Server Error"}}
    }
  },

  addToCart : async function (medicineId : string) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/cart`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify({medicineId})
      })
      const data = await res.json();
    
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Internal Server Error"}}
    }
  },

  incrementItem : async function (medicineId : string) {
    const medicineInfo = {medicineId};

    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/cart`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify(medicineInfo),
      })
      
      const data = await res.json();
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Item increment failed"}}
    }
  },

  decrementItem : async function (medicineId : string) {
    const medicineInfo = {medicineId};

    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/decrement`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify(medicineInfo),
      })
      if(!res.ok){
        return {data : null, error : {message : "Item decrement failed"}}
      }
      const data = await res.json();
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  removeCartItem : async function (id : string) {

    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/${id}`,{
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        }
      })
      if(!res.ok){
        return {data : null, error : {message : "Item decrement failed"}}
      }
      const data = await res.json();
      return {data : data, error : null}
    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  createMyOrder : async function (orderData : Order) {
    
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/orders`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify(orderData)
      })
      const data = await res.json();
      console.log(data);
      return {data : data, error : null};

    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  getMyAllOrders : async function () {

    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/orders`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        next : {
          tags : ["allOrders"]
        }
      })
      const data = await res.json();
      return {data : data, error : null};

    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  getMySingleOrders : async function (id : string) {

    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/orders/${id}`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        }
      })
      const data = await res.json();
      return {data : data, error : null};

    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  createMyAddress : async function (addressData : Address) {
    
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/address`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
        body : JSON.stringify(addressData)
      })
      const data = await res.json();
      return {data : data, error : null};

    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },
  
  getMyAddress : async function () {
    
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/auth/my-address`,{
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          Cookie : cookieStore.toString()
        },
      })
      const data = await res.json();
      return {data : data, error : null};

    } catch (error) {
      return {data : null, error : {message : "Item decrement failed"}}
    }
  },

  // orderItem : async function (id : string) {
  //   try {
  //     const cookieStore = await cookies();
  //     const res = await fetch(`${API_URL}/api/orders`,{
  //       method : "POST",
  //       headers : {
  //         "Content-Type" : "application/json",
  //         Cookie : cookieStore.toString()
  //       },
  //       body : JSON.stringify(data)
  //     })
  //     const data = await res.json();
  //     return {data : data, error : null}
  //   } catch (error) {
  //     return {data : null, error : {message : "Ordering Item Failed"}}
  //   }
  // },
}