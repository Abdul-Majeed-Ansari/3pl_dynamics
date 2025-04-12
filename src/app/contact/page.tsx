import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import DonationCard from "@/components/DonationCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Contact us for any inquiries, support, or partnership opportunities. Our team is here to assist you and ensure your questions are answered promptly."
      />

      <Contact />
      <DonationCard />
    </>
  );
};

export default ContactPage;
