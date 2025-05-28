'use client'
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
  return ( <nav className="flex gap-10 items-center px-4 py-2 bg-gray-100 font-sans text-lg font-semibold xs:small md:text-md m-0">
     <div><Bars /></div>
      <div>Amader Seba</div>
    </nav> );
};

export default UpperNav;
