
import { getStatistics } from "@/actions/admin.actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const data = await getStatistics();

  const stats = [
    { title: "Total Users", value: data?.totalUser },
    { title: "Total Customers", value: data?.totalCustomer },
    { title: "Total Orders", value: data?.totalOrder },
    { title: "Total Order Amount", value: `$ ${data?.totalOrderAmount}` },
    { title: "Total Medicines", value: data?.totalMedicine },
    { title: "Total Categories", value: data?.totalCategory },
  ];

  return (
    <div className="p-6 space-y-6 ">
      
      <h1 className="text-3xl font-bold">Seller Dashboard</h1>

      <div className="grid grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="shadow-md hover:shadow-xl transition duration-300 rounded-2xl"
          >
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-bold">{stat.value ?? 0}</p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}