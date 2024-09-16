import MobileNav from "../../components/MobileNav";
import SideBar from "../../components/SideBar";
import Image from 'next/image';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let loggedIn: User = {firstName: 'Sherif', lastName: 'Bialy', email: 'a@b.c'};
  return (
    <main className="flex h-screen w-full font-inter">
         <SideBar 
          user = {loggedIn}/>

          <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image 
              src="/icons/logo.svg" 
              width={30} 
              height={30}
               alt="menu icon" />
               <div>
                <MobileNav user={loggedIn}/>
               </div>
            </div>
            {children}

          </div>
    </main>
  )
}
