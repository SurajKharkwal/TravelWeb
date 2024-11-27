
const services = [
  { img: "/serv-1.png", title: "adventure" },
  { img: "/serv-5.png", title: "tour guide" },
  { img: "/serv-2.png", title: "trekking" },
  { img: "/serv-6.png", title: "rafting" },
  { img: "/serv-3.png", title: "off-roading" },
  { img: "/serv-4.png", title: "camping" },
];

const ServiceCard = ({ img, title }) => (
  <div className="flex flex-col items-center aspect-square justify-center bg-violet-500 p-8 font-bold hover:bg-transparent">
    <img src={img} alt={title} />
    <h3 className="capitalize">{title}</h3>
  </div>
);

export default function Services() {
  return (
    <section className=" w-full py-6 gap-8 flex items-center flex-col justify-center ">
      <h1 className="text-[4rem] uppercase font-bold">our services</h1>
      <div className="flex w-full justify-center gap-2 ">
        {services.map((service, index) => (
          <ServiceCard key={index} img={service.img} title={service.title} />
        ))}
      </div>
    </section>
  );
}
