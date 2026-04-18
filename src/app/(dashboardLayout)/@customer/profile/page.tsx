import { getMyProfile } from "@/actions/customer.actions";
import { CustomerProfileCard } from "@/components/modules/customer/CustomerProfileCard";

export const dynamic = "force-dynamic";

export default async function ProfilePage () {

  const data = await getMyProfile();
  
  return (
    
    <div className="">

      <CustomerProfileCard data={data.data.data} />

    </div>
    
  );
}