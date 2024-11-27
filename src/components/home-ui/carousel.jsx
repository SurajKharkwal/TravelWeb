
import { Clink } from "../Button";

const slides = [
  {
    title: "travel around the world",
    subTitle: "explore, discover, travel",
    btnLabel: "discover more",
    img: "/home-bg-1.jpg",
  },
  //{
  //  title: "discover new places",
  //  subTitle: "explore, discover, travel",
  //  btnLabel: "discover more",
  //  img: "/home-bg-2.jpg",
  //},
  //{
  //  title: "conquer your fears",
  //  subTitle: "explore, discover, travel",
  //  btnLabel: "discover more",
  //  img: "/img-5.jpg",
  //},
];

const Slide = ({ title, subTitle, btnLabel, img }) => (
  <div
    className="w-full h-[650px] text-white justify-center items-center flex text-center"
    style={{
      background: `url(${img}) no-repeat center/cover`,
    }}
  >
    <div>
      <span className="capitalize text-3xl">{subTitle}</span>
      <h3 className="uppercase text-[5rem] font-extrabold">{title}</h3>
      <Clink to="/Package" >
        {btnLabel}
      </Clink>
    </div>
  </div>

);

export default function Carousel() {
  return (
    <section className="w-full h-full">
      {slides.map((slide, index) => (
        <Slide
          key={index}
          title={slide.title}
          subTitle={slide.subTitle}
          btnLabel={slide.btnLabel}
          img={slide.img}
        />
      ))}
    </section>
  );
}
