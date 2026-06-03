import React, { useState, useEffect }  from 'react'
import Menu_Hero from "../Components/Menu/Menu_Hero";
import Menu_OrderProduct from "../Components/Menu/Menu_OrderProduct";
import Menu_details from '../Components/Menu/Menu_details';
import Loader from '../Components/Loader/Loader.jsx';


const MenuPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  
  return (
    <div className="bg-[#120705] min-h-screen relative overflow-hidden">
      {/* Dynamic ambient coffee glow matrices */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#bcee04]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-15%] w-[60%] h-[60%] bg-amber-600/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-[#bcee04]/2 rounded-full blur-[120px] pointer-events-none" />

      <Menu_Hero />
      <Menu_details  />
      <Menu_OrderProduct />
    </div>
  )
}

export default MenuPage
