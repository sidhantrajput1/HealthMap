
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import OurService from "./OurService"
import Footer from "./Footer"
import About from "./About"

const Home = () => {
    return (
        <div className="bg-emerald-600">
            <Navbar />
            <HeroSection />
            < About />
            <OurService />
            < Footer />
        </div>
    )
}

export default Home
