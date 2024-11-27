
import { Link } from 'react-router-dom';
import Maxwidth from '../components/Maxwidth';
import { Clink } from '../components/Button';

const data = {
  title: "Top Destinations",
  img: "/home-bg-1.jpg",
};

const destinations = [
  {
    imgSrc: "/img-1.jpg",
    title: "Adventure & Tour 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-2.jpg",
    title: "Adventure & Tour 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-3.jpg",
    title: "Adventure & Tour 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-4.jpg",
    title: "Adventure & Tour 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-5.jpg",
    title: "Adventure & Tour 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-6.jpg",
    title: "Adventure & Tour 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-7.avif",
    title: "Adventure & Tour 7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-8.avif",
    title: "Adventure & Tour 8",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
  {
    imgSrc: "/img-9.jpg",
    title: "Adventure & Tour 9",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quisquam voluptas obcaecati corrupti saepe dolore beatae excepturi placeat quam."
  },
];

function PackageImg({ title, img }) {
  return (
    <div className="pt-20 w-full">
      <div
        className="w-full h-[650px] text-white justify-center items-center flex text-center"
        style={{
          background: `url(${img}) no-repeat center/cover`,
        }}
      >
        <div>
          <h3 className="uppercase text-[5rem] font-extrabold">{title}</h3>
        </div>
      </div>
    </div>
  );
}

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

export default function Package() {
  return (
    <div className=' flex flex-col w-full items-center justify-center'>
      <PackageImg title={data.title} img={data.img} />
      <Maxwidth className=' flex flex-col'>
        <h1 className="text-[3rem] font-bold mx-auto">Top Destinations</h1>
        <div className="box-container grid grid-cols-3 gap-4 pt-8">
          {destinations.map((destination, index) => (
            <PackageCard
              key={index}
              imgSrc={destination.imgSrc}
              title={destination.title}
              description={destination.description}
            />
          ))}
        </div>
        <div className="load-more text-center mt-8">
          <Clink to="/Package" className="btn">Load More</Clink>
        </div>
      </Maxwidth>
    </div>
  );
}
