import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";
import contactbg from "../../assets/contactbg.jpg";


/* eslint-disable jsx-a11y/iframe-has-title */
export default function Contact() {
    return (
        <>
        <Header/>
        <section className="bg-cover bg-center bg-fixed h-72 px-5 pt-40" 
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${contactbg})`
        }}>
            <p className="text-white text-center font-bold text-4xl">Contact Us</p>     
        </section>

        <section className="p-10 bg-slate-100 lg:flex">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold pb-5">Write Us Something</h2>
                <form>
                    <div className="md:flex md:w-11/12 md:gap-5">
                    <div className="md:w-6/12">
                    <label for="name" className="md:text-xl">Your Name</label><br/>
                    <input type="text" id="name" placeholder="Enter your name" className="w-11/12 mb-5 p-3 border border-slate-300 md:w-full"/><br/>

                    <label for="email" className="md:text-xl">Your Email</label><br/>
                    <input type="email" id="email" placeholder="Enter your email" className="w-11/12 mb-5 p-3 border border-slate-300 md:w-full"/><br/>
                    </div>

                    <div className="md:w-6/12">
                    <label for="subject" className="md:text-xl">Your Subject</label><br/>
                    <input type="text" id="subject" placeholder="Enter your subject" className="w-11/12 mb-5 p-3 border border-slate-300  md:w-full"/><br/>

                    <label for="contact" className="md:text-xl">Contact Number</label><br/>
                    <select id="countrycode" className="mb-5 p-3 border-y border-l border-slate-300 md:w-4/12">
                        <option>+232</option>
                        <option>+233</option>
                        <option>+242</option>
                        <option>+221</option>
                        <option>+227</option>
                        <option>+234</option>
                        <option>+254</option>
                        <option>+256</option>
                        <option>+39</option>
                        <option>+41</option>
                        <option>+44</option>
                        <option>+49</option>
                    </select>
                    <input type="number" id="contact" placeholder="Phone number" className="w-8/12 mb-5 p-3 border-y border-r border-slate-300 md:w-8/12"/><br/>
                    </div>
                    </div>

                    <label for="message" className="md:text-xl">Your Message</label><br/>
                    <textarea id="message" placeholder="Tell us a few words" className="w-11/12 mb-5 p-3 h-20 border border-slate-300 md:h-32"></textarea><br/>

                    <input type="button" onClick={() => alert("Your message has been sent")}  value="Send Message" className="bg-blue-400 p-2 text-white font-semibold md:w-40 md:text-xl"/>
                </form>
            </div>

            <div className="bg-blue-950 rounded-md mt-10 p-5">
                <h3 className="text-blue-400 font-semibold">CONTACT</h3>
                <h2 className="text-white font-bold text-2xl">Our Contact Detail</h2>

                <div className="flex gap-5 border-b-2 py-6">
                    <div>
                    <i class="fa-solid fa-envelope bg-slate-100 p-3 text-xl"></i>
                    </div>
                    <div>
                        <h3 className="text-white">Send E-mail</h3>
                        <p className="text-slate-400">info@onyxdevs.com</p>
                    </div>
                </div>

                <div className="flex gap-5 border-b-2 py-6 text-xl">
                <div>
                <i class="fa-solid fa-phone-volume bg-slate-100 p-3"></i>
                </div>
                    <div>
                        <h3 className="text-white">Call Anytime</h3>
                        <p className="text-slate-400">+233 20 123 456</p>
                    </div>
                </div>

                <div className="flex gap-5 py-6">
                <div>
                <i class="fa-solid fa-location-dot bg-slate-100 p-3 text-xl"></i>
                </div>
                    <div>
                        <h3 className="text-white">Location:</h3>
                        <p className="text-slate-400">MEST Africa, Ambassadorial Enclave, 20 Aluguntugui St, Accra</p>
                    </div>
                </div>

                <div className="flex gap-5">
                <i class="fa-brands fa-facebook text-white bg-blue-400 p-2 rounded-2xl"></i>
                <i class="fa-brands fa-twitter text-white bg-blue-400 p-2 rounded-2xl"></i>
                <i class="fa-brands fa-linkedin text-white bg-blue-400 p-2 rounded-2xl"></i>
                <i class="fa-brands fa-pinterest text-white bg-blue-400 p-2 rounded-2xl"></i>
                </div>

            </div>
        </section>

        <section className="w-full h-96">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4740037422603!2d-0.1542954263557485!3d5.6443429327578105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b550b4b1287%3A0x5bfe4abfd88d302b!2sMEST%20Africa!5e0!3m2!1sen!2sgh!4v1711360105497!5m2!1sen!2sgh" 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" className=" w-full h-full">
        </iframe>
        </section>
        <Footer/>
        </>
    );
};