import { getMyAddress } from "@/actions/customer.actions";
import AddressForm from "@/components/modules/customer/CustomerCheckOut";

export const dynamic = "force-dynamic";

interface CheckOutProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CheckOut({params} : {params : Promise<{slug : string}>}) {
  const {slug} = await params;
  const { data: address } = await getMyAddress();
  
  return (
    <div>
      <AddressForm slug={slug} address={address} />
    </div>
  );
}