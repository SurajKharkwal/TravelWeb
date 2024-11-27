import { Clink } from "../components/Button";
import AboutUs from "../components/home-ui/about-us";
import Craousel from "../components/home-ui/carousel";
import HomePackages from "../components/home-ui/Packages";
import Services from "../components/home-ui/service-card";
import Maxwidth from "../components/Maxwidth";

export default function Home() {
  return (
    <div className=" flex flex-col items-center pt-20">
      <Craousel />
      <Services />
      <AboutUs />
      <HomePackages />
      <Maxwidth className="w-[600px] pb-12 flex items-center justify-center flex-col">
        <h3 className="capitalize font-bold text-[4rem]">upto 50% offer</h3>
        <p className="text-center font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur ducimus blanditiis excepturi accusamus ipsa? Tempore reiciendis, deserunt, recusandae odit maiores, animi perferendis dicta hic sequi minus ducimus placeat libero.</p>
        <Clink to="/">Book Now</Clink>
      </Maxwidth>
    </div >
  )
}

