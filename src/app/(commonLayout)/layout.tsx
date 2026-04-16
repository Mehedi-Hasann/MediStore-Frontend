import { Navbar } from "@/components/layout/Navbar";

export default function CommonLayout ({children} : {children : React.ReactNode}) {
  
  return (
    
    <div suppressHydrationWarning>

        <Navbar></Navbar>
        {children}


    </div>
    
  );
}