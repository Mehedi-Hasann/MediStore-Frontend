import { getMyAddress } from "@/actions/customer.actions";
import AddressForm from "@/components/modules/customer/CustomerCheckOut";

interface CheckOutProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CheckOut({ searchParams }: CheckOutProps) {
  const { data: address } = await getMyAddress();
  const itemId = searchParams?.itemId;

  console.log('itemId => ',itemId); // Server-side console

  return (
    <div>
      <h1>This is CheckOut</h1>
      <p>Ordering Item ID: {itemId}</p>
      <AddressForm address={address} />
    </div>
  );
}