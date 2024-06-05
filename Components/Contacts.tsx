import { ContactDock } from "./Effects/ContactDock"
import Meteors from "./magicui/meteors"
import RetroGrid from "./magicui/retro-grid"


const ContactsPage =()=>{
    return(
        <div className="  relative bg-slate-900   flex  w-full  items-center justify-center overflow-hidden  p-20 " id="Contacts">
            <Meteors number={30} />
            
            <div className=" justify-center md:mx-[39%] sm:mx-[20%] content-center"> 
            <ContactDock/>
            </div>
         
        </div>
    )

}
export default ContactsPage