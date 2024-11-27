import { Link } from "react-router-dom";
import Maxwidth from "../Maxwidth";
import { Clink } from "../Button";

export default function AboutUs() {
  return (
    <Maxwidth className=" flex justify-center ">
      <img src="/about-img.jpg" alt="About Us" className=" h-[500px] " />
      <div className="text-xl bg-neutral-300 space-y-6 mt-auto mb-auto p-8">
        <h3 className="text-3xl font-bold">About Us</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Cum ipsum ex, sint repellendus tempora consectetur
          iure vel soluta animi quis placeat consequuntur
          asperiores iste nam ad? A repellat sequi cupiditate?
        </p>
        <br />
        <Clink to="/About" >
          read more
        </Clink>
      </div>
    </Maxwidth>
  )
}
