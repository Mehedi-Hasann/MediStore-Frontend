import { getMyAddress } from "@/actions/customer.actions";
import AddressForm from "@/components/modules/customer/CustomerCheckOut";

export const dynamic = "force-dynamic";

interface CheckOutProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CheckOut({params} : {params : Promise<{slug : string}>}) {
  const { data: address } = await getMyAddress();
  const {slug} = await params;


  return (
    <div>
      <AddressForm slug={slug} address={address} />
    </div>
  );
}