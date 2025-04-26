import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <line x1="15" y1="10" x2="25" y2="10" stroke="blue" strokeWidth="2" />
        <line x1="15" y1="15" x2="25" y2="15" stroke="blue" strokeWidth="2" />
        <line x1="15" y1="20" x2="25" y2="20" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "AI-Powered Solutions",
    paragraph:
      "Integrating artificial intelligence to automate processes, enhance experiences, and drive smarter decisions.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <rect
          x="4"
          y="10"
          width="32"
          height="20"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <line x1="4" y1="17" x2="36" y2="17" stroke="blue" strokeWidth="2" />
        <line x1="4" y1="24" x2="36" y2="24" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "Custom Web Development",
    paragraph:
      "Building modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <rect
          x="8"
          y="5"
          width="24"
          height="35"
          rx="4"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="40" r="3" fill="blue" />
      </svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "Crafting seamless, user-friendly apps for both Android and iOS platforms.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <path d="M16 8L20 12L24 8" stroke="blue" strokeWidth="2" />
        <path d="M16 28L20 24L24 28" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "SEO Services",
    paragraph:
      "Optimizing websites to rank higher, attract organic traffic, and boost online visibility.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <path
          d="M20 4L4 20L20 36L36 20L20 4Z"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <path d="M20 4L20 36" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "Digital Marketing",
    paragraph:
      "Delivering data-driven marketing strategies to grow your brand across digital channels.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <rect
          x="6"
          y="8"
          width="28"
          height="28"
          rx="6"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
        <path d="M6 16H34" stroke="blue" strokeWidth="2" />
        <path d="M6 24H34" stroke="blue" strokeWidth="2" />
      </svg>
    ),
    title: "UI/UX Design Excellence",
    paragraph:
      "Designing stunning, intuitive interfaces that keep users engaged and delighted.",
  },
  {
    id: 7,
    icon: (
      <svg
        width="40"
        height="45"
        viewBox="0 0 40 45"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-500"
      >
        <path
          d="M10 22C10 27 20 27 20 32C20 37 30 37 30 32"
          stroke="blue"
          strokeWidth="2"
        />
        <path
          d="M10 32C10 27 20 22 20 22C20 12 30 12 30 22"
          stroke="blue"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Continuous Support & Innovation",
    paragraph:
      "Providing ongoing maintenance, upgrades, and fresh ideas to keep your digital presence ahead of the curve.",
  },
];
export default featuresData;
