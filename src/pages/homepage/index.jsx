import HeroSection from "../../components/hero";
import AboutUs from "../../components/about";
import Achievements from "../../components/achievements";
import ExperiencesSection from "../../components/experiences";
import ProjectsSection from "../../components/projects";
import Skills from "../../components/skills";
import BlogComponent from "../../components/blog";


export default function Homepage() {
    return (
        <>
        <HeroSection/>
        <AboutUs/>
        <Skills/>
        {/* <Achievements/> */}
        <ExperiencesSection/>
        <ProjectsSection/>
        <BlogComponent/>
        {/* <Footer/> */}
        </>
    );
};