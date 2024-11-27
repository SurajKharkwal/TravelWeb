
import { Link } from "react-router-dom";
import Maxwidth from "../Maxwidth";
import { Button, Clink } from "../Button";

const packages = [
  { imgSrc: "/category-1.jpg", title: "adventure & tour", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { imgSrc: "/category-4.jpg", title: "adventure & tour", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { imgSrc: "/category-2.jpg", title: "adventure & tour", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

const PackageCard = ({ imgSrc, title, description }) => (
  <div className="bg-white h-[500px] border-[1px] border-black shadow-sm">
    <div className="aspect-video overflow-hidden">
      <img src={imgSrc} alt={title} className="hover:scale-105 duration-500" />
    </div>
    <div className="flex font-extralight flex-col text-center h-full gap-4 p-4 items-center">
      <h3 className="capitalize text-2xl font-bold">{title}</h3>
      <p>{description}</p>
      <Clink to="/Book" className="capitalize font-normal">book now</Clink>
    </div>
  </div >
);

export default function HomePackages() {
  return (
    <div className="bg-neutral-200 my-16 py-8 w-full flex justify-center">
      <Maxwidth className="flex flex-col items-center gap-8" >
        <h1 className=" text-[4rem] font-bold uppercase pt-4">our packages</h1>
        <div className="flex gap-4">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              imgSrc={pkg.imgSrc}
              title={pkg.title}
              description={pkg.description}
            />
          ))}
        </div>
        <div className="load-more">
          <Clink to="/Package" className="btn">load more</Clink>
        </div>
      </Maxwidth>
    </div>
  );
}
