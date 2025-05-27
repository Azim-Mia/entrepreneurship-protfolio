'use client'
import { useRouter } from 'next/navigation';
const UpperNav = () => {
  const router = useRouter();
  const handleDeshboard=()=>{
  const isLoggedIn = true; // Replace with real auth check
  if (isLoggedIn) {
      router.push('/deshboard');
    }else{
     router.push('/login'); 
    }
}
  return ( <nav className="w-full flex justify-self-start bg-black text-white gap-10 items-center px-4 py-2 bg-gray-100 font-sans text-lg font-semibold xs:small">
      <div onClick={handleDeshboard}>☰</div>
      <div>Amader Seba</div>
    </nav>
  );
};

export default UpperNav;
