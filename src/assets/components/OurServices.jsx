import { TbArrowBarRight } from "react-icons/tb";

const OurServices = () => {
  const services = [
    {
      title: "Accelerate Development",
      text: "Ensuring you acn adapt to a larger software workload without compromising performance or losing revenue.AXON operates exclusively to intercept the Stall and get back on growth quicker and more sustainability than anyone else",
    },
    {
      title: "Web & Mobile Development",
      text: "Product-driven development with a focus on customers' needs, requirements, and expectations. With over 10 years of industry expertise and deep knowledge of web and mobile tech, we build secure and cross-platform apps, marketplaces and digital platforms",
    },
    {
      title: "3 & Mobile Development",
      text: "Product-driven development with a focus on customers' needs, requirements, and expectations. With over 10 years of industry expertise and deep knowledge of web and mobile tech, we build secure and cross-platform apps, marketplaces and digital platforms",
    },
    {
      title: "4 & Mobile Development",
      text: "Product-driven development with a focus on customers' needs, requirements, and expectations. With over 10 years of industry expertise and deep knowledge of web and mobile tech, we build secure and cross-platform apps, marketplaces and digital platforms",
    },

    {
      title: "Web & Mobile Development",
      text: "Product-driven development with a focus on customers' needs, requirements, and expectations. With over 10 years of industry expertise and deep knowledge of web and mobile tech, we build secure and cross-platform apps, marketplaces and digital platforms",
    },
  ];

  return (
    <div className="w-[80%] md:mx-[100px] sm:mx-[30px]">
      <h1 className="text-center">Our Services</h1>
      {/* main service */}
      <div className="grid md:grid-cols-2 gap-8 py-3">
        {services
          .filter((service, index) => index < 2)
          .map((service, index) => (
            <div
              key={index}
              className="card lg:w-[550px] gap-7 md:w-[300px] sm:w-[330px] h-[400px] md:bg-gradient-to-b md:from-main md:to-sub text-primary-content hover:bg-white hover:border-blue-600 md:hover:border-2"
            >
              <div className="card-body  sm:text-black md:text-white md:hover:bg-white md:hover:text-black hover:cursor-pointer md:hover:border sm:border-2 sm:rounded-[1rem] sm:border-blue-600 hover:rounded-[1rem] hover:duration-300">
                <h2 className="card-title">
                  <button className="btn bg-red hover:bg-red border-none">
                    <TbArrowBarRight />
                  </button>
                </h2>
                <h2 className="py-5 text-xl">{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
      </div>

      {/* sub service */}

      <div className="grid md:grid-cols-3 gap-8 pt-3">
        {services
          .filter((service, index) => index > 1)
          .map((service, index) => (
            <div
              key={index}
              className="card md:w-[360px] gap-7 sm:w-[330px] h-[400px] md:bg-gradient-to-b md:from-main md:to-sub text-primary-content hover:bg-white hover:border-blue-600 md:hover:border-2"
            >
              <div className="card-body  sm:text-black md:text-white md:hover:bg-white md:hover:text-black hover:cursor-pointer md:hover:border sm:border-2 sm:rounded-[1rem] sm:border-blue-600 hover:rounded-[1rem] hover:duration-300">
                <h2 className="card-title">
                  <button className="btn bg-red hover:bg-red border-none">
                    <TbArrowBarRight />
                  </button>
                </h2>
                <h2 className="py-5 text-xl">{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurServices;
