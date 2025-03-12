import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Page | Free Next.js Template for Startup and SaaS",
  description: "This is Company Page for Startup Nextjs Template",
  // other metadata
};

const Company = () => {
  return (
    <>
      <Breadcrumb
        pageName="Company"
        description="3PL (Third-Party Logistics) provides seamless supply chain solutions, including warehousing, inventory management, and transportation, ensuring efficiency, scalability, and cost savings for businesses."
      />
      <AboutSectionTwo />
      <AboutSectionOne />
      <Team />
    </>
  );
};

export default Company;
