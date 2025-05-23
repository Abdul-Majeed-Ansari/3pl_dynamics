type PricingBoxProps = {
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  highlighted?: boolean;
  buttonText?: string;
};

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { packageName, subtitle, children, highlighted = false, buttonText = "Start Free Trial" } = props;

  return (
    <div className="w-full h-full">
      <div className={`relative z-10 rounded-sm px-8 py-10 shadow-three hover:shadow-one dark:shadow-two dark:hover:shadow-gray-dark h-full flex flex-col ${
        highlighted ? "bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200" : "bg-white dark:bg-gray-dark"
      }`}>
        {highlighted && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Best Value
            </span>
          </div>
        )}
        <div className="flex items-center justify-between mb-4">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="flex-grow mb-8">{children}</div>
        <div className="mt-auto">
          <button className={`flex w-full items-center justify-center rounded-sm p-3 text-base font-semibold transition duration-300 ease-in-out ${
            highlighted 
              ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-signUp" 
              : "bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp"
          }`}>
            {buttonText}
          </button>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;