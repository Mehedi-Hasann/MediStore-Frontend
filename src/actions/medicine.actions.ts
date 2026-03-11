"use server";

import { Props } from "@/app/(commonLayout)/shop/page";
import {  medicineService } from "@/services/medicine.service";
import { CreateNewCategory, CreateNewMedicine, MedicineData, OrderStatus } from "@/types/routes.type";

export const getSingleMedicine = async(slug : string) => {
  const res = await medicineService.getMedicineById(slug)
  return res;
}

export const getAllCategory = async () => {
  const res = await medicineService.getAllCategory();
  // console.log(res);
  return res;
}
export const getAllMedicine = async ({search,category,price} : Props ) => {
  const res = await medicineService.getAllMedicine({search,category,price} as {search : string, category : string, price : string});
  // updateTag("medicinePosts");
  return res;
}
export const createMedicine = async(data : CreateNewMedicine) => {
  const res = await medicineService.createMedicine(data);
  return res;
}

export const createCategory = async(data : CreateNewCategory) => {
  const res = await medicineService.createCategory(data);
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