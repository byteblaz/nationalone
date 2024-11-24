import { AboutMain } from "@/sections/aboutmain";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroAboutSection } from "@/sections/heroabout";


export default function About() {
    return (
        <div>
            <Header/>
            <HeroAboutSection/>
            <AboutMain/>
            <Footer/>
            
            
        </div>
    );
}