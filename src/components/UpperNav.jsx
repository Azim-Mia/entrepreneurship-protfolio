'use client'
import SearchItems from '@/components/SearchItems';
import { useRouter } from 'next/navigation';
import Bars from '@/components/bars/Bars'
const UpperNav = () => {
  const router = useRouter();
  const handleDeshboard=()=>{
  const isLoggedIn = false; // Replace with real auth check
  if (isLoggedIn) {
      router.push('/deshboard');
    }else{
     router.push('/login'); 
    }
}
  return ( <nav className="flex justify-between font-sans font-semibold xs:small md:text-sm xs:small  mr-5 items-center p-4">
      <div>Amader Seba</div>
      <div className ="flex">
        <SearchItems />
      <div> <Bars /></div>
        </div>
    </nav> );
};

export default UpperNav;
