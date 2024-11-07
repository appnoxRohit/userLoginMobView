import ContactForm from "../Components/ContactForm";
import ContactMedia from "../Components/ContactMedia";
import Sidebar from "../Components/Sidebar";
import VerticalLine from "../Components/VerticalLine";

const ContactPage = () => {
  return (

    <div className="w-full  md:flex ">
      <Sidebar />
    
      <VerticalLine />
      <div className="px-5   md:px-[250px] md:ml-[80px] md:w-[75%] ">
        <ContactForm />
      </div>
      <VerticalLine />
     
     <ContactMedia />
      
     
    </div>
 
  );
};  

export default ContactPage;