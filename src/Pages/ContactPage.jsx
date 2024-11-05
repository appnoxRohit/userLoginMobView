import ContactForm from "../Components/ContactForm";
import ContactMedia from "../Components/ContactMedia";
import Sidebar from "../Components/Sidebar";
import VerticalLine from "../Components/VerticalLine";

const ContactPage = () => {
  return (

    <div className="w-full font-serif md:flex">
      <Sidebar />
      <VerticalLine />
      <div className="px-5 md:px-[102px] md:w-[65%]">
        <ContactForm />
      </div>
      <VerticalLine />
      <ContactMedia />
    </div>
  );
};

export default ContactPage;