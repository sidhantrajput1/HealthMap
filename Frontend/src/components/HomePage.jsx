
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import OurService from "./OurService"
import Footer from "./Footer"
import About from "./About"
import Features from "./Features"
// import HospitalMap from "./HospitalMap"

const Home = () => {
    return (
        <div className="bg-emerald-600">
            <Navbar />
            <HeroSection />
            < About />
            < Features />
            <OurService />
            < Footer />
        </div>
    )
}

export default Home
