
export interface Route {
  title : string;
  items : {
    title : string;
    url : string;
  }[];
}
export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface Order {
  id : string,
  quantity : number,
  totalAmount : number,
  status : OrderStatus
}

export interface MedicinePost {
  id : string | number,
  name : string,
  price : number,
  stock : number,
  categoryId : string,
  categoryName : string,
  createdAt : string,
  updatedAt : string,
  orders : Order[]
}

export interface Medicine {
  id: string;
  name: string;
  price: number;
  stock: number;
  categoryId: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  orders: any[];
}
export interface CreateNewMedicine {
  name : string,
  category : string,
  price : number,
  stock : number
}
export interface Orders  {
  id?: string;
  totalAmount?: number;
  quantity?: number;
  userId?: string;
  medicineId?: string;
  status?: string;
  shippingAddress?: string | null;
  createdAt?: string;
}

export interface Order {
  id: string
  totalAmount: number
  quantity: number
  userId: string
  medicineId: string
  addressId: string
  status: OrderStatus
  createdAt: string
}

export interface medicineParams {
  search ?: string,
  price ?: number,
  category ?: string,
  sortBy ?: string,
  sortOrder ?: string
}
export interface MedicineData {
  name ?: string,
  price : number,
  stock : number
}

export interface Medicine {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface CartItemProps {
  id: string;
  userId: string;
  medicineId: string;
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
  medicine?: Medicine; // optional, fetch & attach later
}

export interface OrderProps {
  id: string;
  totalAmount: number;
  quantity: number;
  userId: string;
  medicineId: string;
  status: string;
  shippingAddress: string | null;
  createdAt: string;
}

export interface Address  {
    id?: string;
    createdAt?: Date;
    userId?: string;
    fullName: string;
    phone: string;
    city: string;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image ?: string | null;
  createdAt: string;
  updatedAt: string;
  role: string;
  userStatus: string;
}
export interface CategoryType {
  id : string,
  categoryName : string,
  description ?: string
}