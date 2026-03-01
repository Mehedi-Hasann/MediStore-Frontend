"use server";

import {  medicineService } from "@/services/medicine.service";
import { CreateNewMedicine, MedicineData, OrderStatus } from "@/types/routes.type";
import { updateTag } from "next/cache";

export const getSingleMedicine = async(slug : string) => {
  const res = await medicineService.getMedicineById(slug)
  return res;
}

export const getAllCategory = async () => {
  const res = await medicineService.getAllCategory();
  // console.log(res);
  return res;
}
export const getAllMedicine = async () => {
  const res = await medicineService.getAllMedicine();
  // updateTag("medicinePosts");
  return res;
}
export const createMedicine = async(data : CreateNewMedicine) => {
  const res = await medicineService.createMedicine(data);
  return res;
}

export const updateMedicine = async(slug: string, data : MedicineData) => {
  const res = await medicineService.updateMedicine(slug, data);
  return res;
}

export const deleteMedicine = async(slug : string) => {
  const res = await medicineService.deleteMedicine(slug);
  return res;
}
export const updateOrderStatusBySeller = async({id,status} : {id : string, status : OrderStatus}) => {
  const res = await medicineService.updateOrderStatusBySeller({id, status});
  return res;
}