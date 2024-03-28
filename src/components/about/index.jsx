import onlylogobg from "../../assets/onlylogobg.png"

export default function AboutUs() {
  return (
    <>
      <section id="about" className="bg-cover bg-center pb-5" style={{
            backgroundImage: `linear-gradient(rgba(227, 234, 236, 0.785), rgba(227, 234, 236, 0.785)), url(${onlylogobg})`
        }}>
        <div className="text-center">
          <div>
            <h1 className="font-semibold text-xl pt-10 md:text-3xl">About Us</h1>
          </div>

          <div className="p-5 md:text-lg lg:text-2xl">
            <p>Welcome to Onyx, a passionate team of web developers, dedicated to crafting exceptional digital experiences. With a combination of a great team, we collaborate to bring visions to life through code and creativity.</p>
            <p>At Onyx, we specialize in creating custom websites and web applications that exceed client expectations. From the initial concept to the final launch, we prioritize communication and attention to detail, ensuring a seamless and enjoyable experience for everyone involved.</p>
            <p>When you choose Onyx, you are not just hiring a team of web developers, you are partnering with a dedicated group of young professionals who are commited to your success, delivering projects on time and within budget.</p>
            <p> Get in touch with us today to duscuss your project and see how Onyx can make it a reality.</p>
          </div>
        </div>
      </section>

    </>
  );
}
