"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 md:py-20 lg:py-28 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Find the Perfect Plan for Your Needs"
          paragraph="Explore our plans below and choose the one that best fits your goals, budget, and usage. Each plan is thoughtfully designed to provide excellent value, robust features, and the dedicated support you deserve."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          <div className="h-full">
            <PricingBox
              packageName="3-Month Plan (Starter)"
              subtitle="Short-term commitment, ideal for testing or pilot projects."
              buttonText="Start Free Trial"
            >
              <OfferList text="Up to 4,000 orders/month Up to 30 3PL Users" status="active" />
              <OfferList text="3PL User Portal, Billing & Invoicing" status="active" />
              <OfferList text="Order Management, Barcode/Label Management" status="active" />
              <OfferList text="Free dedicated ec2 instance 12gb ram" status="active" />
              <OfferList text="Inventory Management, Warehouse Management" status="active" />
              <OfferList text="Shipping Management, Order Fulfillment" status="active" />
              <OfferList text="Returns Management, Reporting and Mobile App" status="active" />
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Duration:</strong> 3 months</p>
                <p className="text-green-600 font-medium">Includes a 3-day free trial!</p>
              </div>
            </PricingBox>
          </div>

          <div className="h-full">
            <PricingBox
              packageName="6-Month Plan (Business)"
              subtitle="Best for scaling teams and mid-term projects."
              buttonText="Choose Plan"
            >
              <OfferList text="Up to 8,000 orders/month Up to 50 3PL Users" status="active" />
              <OfferList text="3PL User Portal, Billing & Invoicing" status="active" />
              <OfferList text="Order Management, Barcode/Label Management" status="active" />
              <OfferList text="Free dedicated ec2 instance 12gb ram" status="active" />
              <OfferList text="Inventory Management, Warehouse Management" status="active" />
              <OfferList text="Shipping Management, Order Fulfillment" status="active" />
              <OfferList text="Returns Management, Reporting and Mobile App" status="active" />
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Duration:</strong> 6 months</p>
              </div>
            </PricingBox>
          </div>

          <div className="h-full">
            <PricingBox
              packageName="12-Month Plan (Premium)"
              subtitle="Ideal for long-term commitment with maximum savings."
              buttonText="Choose Plan"
            >
              <OfferList text="Up to 12,000 orders/month Up to 70 3PL Users" status="active" />
              <OfferList text="3PL User Portal, Billing & Invoicing" status="active" />
              <OfferList text="Order Management, Barcode/Label Management" status="active" />
              <OfferList text="Free dedicated ec2 instance 12gb ram" status="active" />
              <OfferList text="Inventory Management, Warehouse Management" status="active" />
              <OfferList text="Shipping Management, Order Fulfillment" status="active" />
              <OfferList text="Returns Management, Reporting and Mobile App" status="active" />
              <OfferList text="Work Order Management, Bill of Materials (BOM) Tracking" status="active" />
              <OfferList text="Production Scheduling, Material Requirement Planning (MRP)" status="active" />
              <OfferList text="Batch & Lot Tracking" status="active" />
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Duration:</strong> 12 months</p>
              </div>
            </PricingBox>
          </div>

          <div className="h-full">
            <PricingBox
              packageName="12-Month Plan (Enterprise)"
              subtitle="Ideal for long-term commitment with maximum savings."
              buttonText="Talk To Sales"
              highlighted={true}
            >
              <OfferList text="Unlimited orders/month Unlimited 3PL Users" status="active" />
              <OfferList text="3PL User Portal, Billing & Invoicing" status="active" />
              <OfferList text="Order Management, Barcode/Label Management" status="active" />
              <OfferList text="Free dedicated ec2 instance 12gb ram" status="active" />
              <OfferList text="Inventory Management, Warehouse Management" status="active" />
              <OfferList text="Shipping Management, Order Fulfillment" status="active" />
              <OfferList text="Returns Management, Reporting and Mobile App" status="active" />
              <OfferList text="Work Order Management, Bill of Materials (BOM) Tracking" status="active" />
              <OfferList text="Production Scheduling, Material Requirement Planning (MRP)" status="active" />
              <OfferList text="Batch & Lot Tracking" status="active" />
              <OfferList text="Advanced Resource & Capacity Planning" status="active" />
              <OfferList text="Production Routing & Workflow Management" status="active" />
              <OfferList text="Advanced Analytics & Forecasting" status="active" />
              <OfferList text="Customizable API Integrations" status="active" />
              <OfferList text="Role-Based Access Controls" status="active" />
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Duration:</strong> 12 months</p>
              </div>
            </PricingBox>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
