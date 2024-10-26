import React from "react";

const AboutUs = () => {
  return (
    <div className="p-[3rem]">
      <div className="flex flex-col gap-[1rem] [&_p]:tracking-[1px]">
        <div className="flex items-center justify-center">
          <img
            src="https://www.consultancy.uk/illustrations/news/detail/2018-04-17-201940028-Operational-excellence-can-improve-margins-at-oil-refineries.jpg"
            height="400"
            width="70%"
          />
        </div>
        <p>
          At Global Delta, we are driving innovation in the refining industry
          through cutting-edge research and the development of advanced
          technologies that optimize efficiency, sustainability, and operational
          excellence. Our multidisciplinary team of scientists, engineers, and
          technical experts is dedicated to overcoming the complexities faced by
          modern refineries, advancing solutions that maximize process
          performance and minimize environmental impact.
        </p>
        <p>
          Our mission is to pioneer the next generation of refinery
          technologies, focusing on process intensification, hydrogen
          production, emissions reduction, energy efficiency, and
          digitalization. Our expertise in hydrogen generation systems enables
          refineries to meet increasing demand for cleaner fuels. We design and
          develop hydrogen generators and related equipment that seamlessly
          integrate into existing refinery operations, supporting
          decarbonization efforts and improving hydrogen purity and yield.
        </p>
        <p>
          Global Delta’s process technologies and lifecycle solutions enable
          refineries to extract maximum value from hydrocarbons, including
          advanced catalysts, gas separation systems, and hydrogen recovery
          units. Through our state-of-the-art digital tools, we help operators
          enhance efficiency, ensure operational stability, and improve asset
          longevity.
        </p>
        <p>
          Our commitment to safety, product quality, and environmental
          responsibility is at the core of everything we do. We work closely
          with our partners to implement technologies that not only improve
          refinery performance but also contribute to the global energy
          transition. At Global Delta, we are leading the charge toward a more
          sustainable future through innovative hydrogen solutions and
          next-generation refining technologies.
        </p>
      </div>
      <div className="flex items-center gap-[2rem] mt-[4rem]">
        <img
          src="https://media.gettyimages.com/id/530281675/photo/happy-businessman-sitting-in-office-lobby.jpg?s=2048x2048&w=gi&k=20&c=wSQeW8DksjuTTcZoSwo6MfLkCzKUM9ApkeYkpjNSnqk="
          alt="About Us"
          loading="lazy"
          className="bg-cover bg-no-repeat bg-fixed bg-center h-[20%] w-[50%]"
        />
        <div className="flex flex-col items-center justify-center gap-[1.25rem] mb-[7.5rem]">
          <h1 className="text-black text-[1.875rem]">ROKAN CHOWDHURY </h1>
          <hr className="border-none w-full h-[0.0625rem] bg-[#172554] mb-[0.5rem]" />
          <p className="text-gray-600 text-justify leading-[1.25rem] tracking-[2px]">
            Rokan Chowdhury is President of Trans Global LT. Prior to his
            presidency, Mr. Payne served as Senior Vice President of Operations
            beginning in 2019. From 2016 to 2019, he served as Vice President of
            Business Services, then Senior Vice President of Finance and
            Business Services. Mr. Payne joined Trans Global LT as a Division
            Manager in 2012 and established their Mining and Minerals division.
            Before joining Matrix, Mr. Payne held leadership positions in
            operations, finance, and project controls for Aker Solutions /
            Kvaerner and Jacobs. Mr. Payne holds a Bachelor of Science in
            Business Administration, Finance from the University of Arizona.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] mt-[4rem]">
        <strong className="text-[32px]">LEADERSHIP</strong>
        <div className="flex gap-[1rem]">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2022/03/Shawn-Payne-200x200-1.jpg"
            height="200px"
            width="200px"
          />
          <div className="flex flex-col">
            <strong className="tracking-[3px]">Frank Capristo</strong>
            <span className="tracking-[3px]">
              Vice President, Operations - Turnaround & Plant Services
            </span>
            <span className="tracking-[1px]">
              Frank Capristo serves as Vice President of Turnaround & Plant
              Services for Matrix Service. He joined Matrix in 2013, most
              recently holding the position of General Manager, Maintenance &
              Plant Services and before that, as Project Sponsor for the BP
              Cherry Point Refinery where he established a strong reputation for
              safety and client relationship leadership. Before joining Matrix
              Service, he held several leadership positions at Brinderon, Jacobs
              Engineering and Fluor Corporation.
            </span>
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2021/07/ExecutiveHeadshots-MarkFillman-web_200x200.jpg"
            height="200px"
            width="200px"
          />
          <div className="flex flex-col">
            <strong className="tracking-[3px]">Mark Fillman</strong>
            <span className="tracking-[3px]">
              Vice President, Operations - AST & Specialty Vessels
            </span>
            <span className="tracking-[1px]">
              Mark Fillman is Vice President of Operations, AST & Specialty
              Vessels, for Matrix Service. He joined Matrix in 1998 and has
              served in several roles within the storage products area
              throughout his career including Project Manager, Commercial
              Contracts Manager, Divisional Manager, and General Manager. Mr.
              Fillman has advanced the historical core AST business at Matrix
              and lead the development of the Company’s cryogenic and specialty
              vessel storage product and service lines.
            </span>
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2024/08/Longer-headshot.jpg"
            height="200px"
            width="200px"
          />
          <div className="flex flex-col">
            <strong className="tracking-[3px]">Terry Longer</strong>
            <span className="tracking-[3px]">
              Vice President, Operations - National Construction Group
            </span>
            <span className="tracking-[1px]">
              Terry Longer is the Vice President of Operations, National
              Construction Group, at Matrix Service. Mr. Longer drives the
              development and implementation of strategic business initiatives
              while overseeing the overall operations and performance, ensuring
              the safe and successful execution of quality projects. Before
              joining Matrix, Mr. Longer served as Vice President of
              Construction for The Americas at Technip Energies.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
