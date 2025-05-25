import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="methilanrameswaran@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 76 875 9748" Image={FiPhone} />
      <SingleInfo text="SriLanka, Jaffna" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
