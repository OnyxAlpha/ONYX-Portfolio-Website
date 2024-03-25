export default function Contact() {
    return (
        <>
        <section>
            <p>contact section goes here</p>     
        </section>

        <section className="p-10 bg-slate-200">
            <div className="">
                <h2 className="text-3xl font-bold pb-5">Write Us Something</h2>
                <form>
                    <label for="name">Your Name</label><br/>
                    <input type="text" id="name" placeholder="Enter your name" className="w-11/12 mb-5 p-3"/><br/>

                    <label for="email">Your Email</label><br/>
                    <input type="email" id="email" placeholder="Enter your email" className="w-11/12 mb-5 p-3"/><br/>

                    <label for="subject">Your Subject</label><br/>
                    <input type="text" id="subject" placeholder="Enter your subject" className="w-11/12 mb-5 p-3"/><br/>

                    <label for="contact">Contact Number</label><br/>
                    <select id="countrycode" className="mb-5 p-3">
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
                    <input type="number" id="contact" placeholder="Enter your phone number" className="w-8/12 mb-5 p-3"/><br/>

                    <label for="message">Your Message</label><br/>
                    <textarea id="message" placeholder="Tell us a few words" className="w-11/12 mb-5 p-3 h-20"></textarea><br/>

                    <input type="button" onClick={() => alert("Your message has been sent")}  value="Send Message" className="border-2 border-neutral-600 p-2"/>
                </form>
            </div>

            <div className="bg-slate-500 mt-10">
                <h3>Contact</h3>
                <h2>Our Contact Detail</h2>
            </div>
        </section>
        </>
    );
};