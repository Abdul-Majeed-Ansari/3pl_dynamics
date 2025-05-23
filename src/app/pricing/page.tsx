import Breadcrumb from "@/components/Common/Breadcrumb";
import DonationCard from "@/components/DonationCard";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Scale your logistics operations with our flexible pricing plans designed for businesses of all sizes."
      />

      <Pricing />
      <DonationCard />
    </>
  );
};

export default PricingPage;
