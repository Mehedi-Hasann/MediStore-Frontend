import { Route } from "@/types/routes.type";

export const customerRoutes: Route[] = [
  {
    title: "Customer Management",
    items: [
      {
        title: "Profile",
        url: "/profile",
      },
      {
        title: "Cart",
        url: "/cart",
      },
      {
        title: "Orders",
        url: "/orders",
      }
    ],
  },
]
