import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-[60%]">
            <div
              className="relative mx-auto mb-12 aspect-[25/16] max-w-[650px] text-center lg:m-0 rounded-md"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/company.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none object-cover"
              />
              <Image
                src="/images/about/company.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-[40%]">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-1">
                At 3PL Dynamics, we are dedicated to transforming logistics operations through innovative technology and data-driven solutions. As a leading provider of third-party logistics (3PL) technology solutions, we specialize in streamlining supply chain processes, optimizing warehouse management, and enhancing operational efficiency.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-1">Our team of experienced professionals brings deep expertise across logistics technology, warehouse automation, inventory management, data analytics, and API integrations. We work closely with businesses to understand their unique logistics challenges, ensuring that every solution we deliver is scalable, efficient, and tailored to their operational needs.</p>
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">By blending creativity, technical know-how, and a client-centric approach, we provide personalized strategies that drive measurable results and long-term success. Whether you’re looking to build a robust digital presence, optimize your business processes, or enhance user experiences, SourceIgnite is your trusted partner every step of the way.</p> */}
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our mission is to help businesses harness the power of technology to solve problems, drive growth, and create lasting value. By combining creativity, technical expertise, and a deep understanding of industry trends, we deliver solutions that exceed expectations and make a real impact.
                </p>
              </div> */}
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                What Sets Us Apart
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At SourceIgnite, we leverage Next.js to build high-performance, SEO-friendly, and scalable web applications. With server-side rendering (SSR), static site generation (SSG), and API routes, Next.js ensures lightning-fast experiences. Trust us for cutting-edge, efficient, and seamless web solutions!
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
