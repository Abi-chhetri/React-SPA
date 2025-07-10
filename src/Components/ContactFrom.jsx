import { useState } from "react";

const ContactUs=()=>{
    
    //const [formData, setFormData] = useState({ name: "", age: "" });
    const [binUrl, setBinUrl] = useState("");

    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit = async (e) => {

        e.preventDefault();

        const userData={
            "name":name,
            "phone_number":number,
            "email":email,
            "address":address,
            "message":message
        }

        const API_KEY = "$2a$10$rhYiYQvLcgsyAKT3RP/1K.nVMhYrzZ7SFq67mmVPmHZPi3GoFdURu";
        const url = "https://api.jsonbin.io/v3/b";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "X-Access-Key": API_KEY,
                "X-Bin-Private": "false",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            const binId = data.metadata.id;
            setBinUrl(`https://jsonbin.io/${binId}`);
            alert("Message sent successfully");
            setName("")
            setEmail("")
            setAddress("")
            setMessage("")
            setNumber("")
        } catch (error) {
            alert("Failed to post data:", error);
        }
    };


   return (
   <section className='flex w-full justify-center items-center mt-20' id='contact'>
        <div className="w-5/6 flex gap-30">
            <div className="flex flex-col gap-5 w-1/2">
                <h1 className="text-4xl font-bold text-blue-900">CONTACT US</h1>
                <p className="text-justify">We’d love to hear from you! Whether you have a question about our services, want to collaborate
                    , or just want to say hello — our team is here and ready to connect. Your feedback, inquiries, 
                    and ideas are always welcome.
                </p>

                <p className="text-justify">
                    Reach out to us anytime using the contact form below, or drop us an email. We aim to respond as 
                    quickly as possible and ensure your message gets the attention it deserves. Let’s start the conversation!
                </p>

                <div className="text-5xl flex justify-start items-center gap-5">
                    <p>&#x1F4E7;</p>
                    <div className="flex flex-col">
                        <p className="text-xs">Email</p>
                        <a href="mailto:abichhetri6677@gmail.com" className="text-sm hover:text-lg hover:text-red-700">abichhetri6677@gmail.com &#8594;</a>
                    </div>
                </div>

            </div>

            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 w-1/2">
                <input className="basis-[48%]" type="text" 
                value={name} 
                placeholder="Name" 
                onChange={(e)=>(
                setName(e.target.value)
                )} required/>

                <input className="basis-[48%]" type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>

                <input className="basis-[48%]" type="number" 
                placeholder="Phone number" 
                value={number}
                onChange={(e)=>setNumber(e.target.value)} 
                required/>

                <input className="basis-[48%]" type="text" 
                value={address}
                placeholder="Address" 
                onChange={(e)=>setAddress(e.target.value)} 
                required/>

                <textarea placeholder="Write your message" cols="52" rows="10" className="placeholder-zinc-500 border-2 border-blue-700 p-2 rounded-xl" 
                value={message}
                onChange={(e)=>setMessage(e.target.value)} 
                required/>

                <button type="submit" className="border-none bg-blue-500 text-lg rounded-sm p-1 pl-2 pr-2 text-white">Submit</button>
            </form>
        </div>
    </section>
)}

export default ContactUs;