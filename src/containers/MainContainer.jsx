import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Galery } from "./Galery";
import { Home } from "./Home";
import { Services } from "./Services";

export const MainContainer = () => {
    return (
        <main>
            <Home />
            <Services />
            <Galery />
            <AboutMe />
            <Contact />
        </main>
    );
}