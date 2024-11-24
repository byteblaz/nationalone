import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroService } from "@/sections/heroservice";
import { ServiSection } from "@/sections/Servicesslide";


export default function Service() {
    return (
        <div>
            <Header/>
            <HeroService/>
            <ServiSection/>
            <Footer/>
            
        </div>
    );
}