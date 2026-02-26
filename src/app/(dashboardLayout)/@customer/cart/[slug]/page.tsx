import { getMyAddress } from "@/actions/customer.actions";
import AddressForm from "@/components/modules/customer/CustomerCheckOut";

interface CheckOutProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CheckOut({params} : {params : Promise<{slug : string}>}) {
  const {slug} = await params;
  const { data: address } = await getMyAddress();
  
  return (
    <div>
      <h1>This is DemoOut</h1>
      <p>Cart ID : {slug}</p>
      <p>Quantity : </p>
      <p>Medicine ID : {}</p>
      <AddressForm slug={slug} address={address} />
    </div>
  );
}