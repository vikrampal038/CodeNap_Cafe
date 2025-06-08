import React, { useState, useEffect }  from 'react'
import Gallery_Hero  from "../Components/Gallery/Gallery_Hero";
import Gallery_Images from "../Components/Gallery/Gallery_Images"; 
import Join_Community from "../CommonField/Join_Community";
import Loader from '../Components/Loader/Loader.jsx';



const GalleryPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <Gallery_Hero />
      <Gallery_Images />
      <Join_Community />
    </>
  )
}

export default GalleryPage
