"use server"

import { customerService, EditInfo } from "@/services/customer.service"
import { Address, Order } from "@/types/routes.type";
import { updateTag } from "next/cache";

export const getMyInfo = async() => {
  const res = await customerService.getMyInfo();
  return res;
}

export const editMyInfo = async({name, email} : EditInfo) => {
  const res = await customerService.editMyInfo({name,email});
  return res;
}

export const getMyCart = async() => {
  const res = await customerService.getMyCart();
  return res;
}

export const getMySingleCart = async(id : string) => {
  const res = await customerService.getMySingleCart(id);
  return res;
}

export const addToCart = async(medicineId : string) => {
  const res = await customerService.addToCart(medicineId);
  return res;
}

export const incrementItem = async(medicineId : string) => {
  const res = await customerService.incrementItem(medicineId as string);
  updateTag("addToCartTag");
  return res;
}

export const decrementItem = async(medicineId : string) => {
  const res = await customerService.decrementItem(medicineId as string);
  updateTag("addToCartTag");
  return res;
}

export const removeCartItem = async(id : string) => {
  const res = await customerService.removeCartItem(id as string);
  updateTag("addToCartTag");
  return res;
}

export const createMyOrder = async(orderData : Order) => {
  const res = await customerService.createMyOrder(orderData);
  updateTag("allOrders")
  return res;
}

export const getMyAllOrders = async() => {
  const res = await customerService.getMyAllOrders();
  return res;
}

export const getMySingleOrders = async(id : string) => {
  const res = await customerService.getMySingleOrders(id);
  return res;
}

export const createMyAddress = async(addressData : Address) => {
  const res = await customerService.createMyAddress(addressData);
  return res;
}

export const getMyAddress = async() => {
  const res = await customerService.getMyAddress();
  return res;
}

// export const orderItem = async(id : string) => {
//   const res = await customerService.orderItem(id as string);
//   updateTag("addToCartTag");
//   return res;
// }