import React, { useState, useEffect }  from 'react'
import Contact_Hero  from "../Components/Contact/Contact_Hero"
import Contact_details from '../Components/Contact/Contact_details'; 
import Join_Community from '../CommonField/Join_Community';
import Loader from '../Components/Loader/Loader.jsx';



const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Contact_Hero />
      <Contact_details />
      <Join_Community />
    </>
  )
}

export default ContactPage
