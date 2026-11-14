import { NavLink, HeroSlide, StatItem, Testimonial, AboutTab } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
  {
    label: "Products",
    href: "/products",
    subNav: [
      {
        label: "Ashirwad Water Storage Tank",
        href: "/product/AASHIRWAD-Water-Tanks",
      },
      {
        label: "DURALEX Water Tanks",
        href: "/product/DURALEX-Water-Tanks",
      },
      {
        label: "NANDHIPLUS Water Tanks",
        href: "/product/NANDHIPLUS-Water-Tanks",
      },
      {
        label: "SUNRISE Water Tanks",
        href: "/product/SUNRISE-Water-Tanks",
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/heroSlide.png",
    mobileImage: "/images/mobileSlide.png",
  },
];

export const aboutTabs: AboutTab[] = [
  {
    id: "products-launched",
    label: "Products Launched",
    heading: "Products Launched",
    body: "Mansi Plastic has launched a diverse range of water storage tank to meet diverse industry demands. Each product is designed with precision to ensure optimal performance and durability. With a focus on innovation and reliability, our wide product range underscores our commitment to delivering versatile and efficient water storage tank solutions.",
    image: "https://picsum.photos/seed/mansi-launch/900/700",
  },
  {
    id: "tailor-made",
    label: "Tailor Made Products",
    heading: "Tailor Made Products",
    body: "Every business has different water storage tank needs. Our engineering team works closely with clients to develop tailor-made film gauges, widths, and formulations, so the finished product fits the application exactly rather than the other way around.",
    image: "https://picsum.photos/seed/mansi-tailormade/900/700",
  },
  {
    id: "quality-management",
    label: "Quality Management",
    heading: "Quality Management",
    body: "Consistency is built into every roll we produce. From raw material inspection to in-line thickness monitoring and final batch testing, our quality management system ensures every shipment meets the same dependable standard.",
    image: "https://picsum.photos/seed/mansi-quality/900/700",
  },
];

export const products: any[] = [
  {
    id: "AASHIRWAD-Water-Tanks",
    image: "/ashirwad/ashirwad.JPG",
    title: "AASHIRWAD Water Tanks",
    description:
      "AASHIRWAD, a trusted water tank brand from Mansi Plastic, offers dependable water storage solutions designed for everyday residential and commercial requirements. The tanks are built with a focus on durability, strength, hygiene, and long-term performance. Manufactured using high-quality LLDPE (Linear Low-Density Polyethylene) virgin material, AASHIRWAD water tanks ensure superior strength, crack resistance, and safe water storage. AASHIRWAD water tanks are suitable for storing water safely while providing a practical solution for homes, buildings, and other applications.",
    href: "/product/AASHIRWAD-Water-Tanks",
    Spacification: ["UV Stabilized", "Food Grade", "Durable Construction"],
    AvailableIn: ["2 Layer", "3 Layer", "4 Layer", "5 Layer"],
    CapiblityRange: [
      "300L",
      "500L",
      "750L",
      "1000L",
      "1500L",
      "2000L",
      "3000L",
      "5000L",
      "10000L",
    ],
    banners: [
      "/ashirwad/ashirwad.JPG",
      "/ashirwad/ashirwad1.JPG",
      "/ashirwad/ashirwad2.JPG",
      "/ashirwad/ashirwad3.JPG",
    ],
    key_features: [
      "Manufactured using LLDPE virgin material for enhanced durability and hygiene",
      "Designed for safe and hygienic water storage",
      "Suitable for residential and commercial applications",
      "Strong structure to handle regular filling and emptying",
      "Available in different capacities to suit varying requirements",
    ],
    featuresBanner: "/images/verticalfeature.png",
    mobileFeaturesBanner: "/images/mobileverticalfeature.png",
    colors: ["White", "Yellow", "Blue", "Black"],
    layers_by_colour: {
      White: ["3-Layer", "4-Layer", "5-Layer"],
      yellow: ["2-Layer"],
      Black: ["2-Layer"],
    },
  },
  {
    id: "DURALEX-Water-Tanks",
    image: "/duralax/duralax.JPG",
    title: "DURALEX Water Tanks",
    description:
      "DURALEX, from Mansi Plastic, is designed to provide reliable and efficient water storage for modern requirements. The brand focuses on combining quality materials with a strong construction to deliver water tanks that can withstand regular usage and changing environmental conditions. Made from LLDPE (Linear Low-Density Polyethylene) virgin material, DURALEX water tanks offer excellent strength, flexibility, and resistance to cracking, ensuring long-lasting and safe water storage. DURALEX water tanks are a practical choice for homes, commercial spaces, and other water storage needs.",
    href: "/products/AASHIRWAD-Water-Tanks",
    Spacification: ["UV Stabilized", "Food Grade", "Durable Construction"],
    AvailableIn: ["2 Layer", "3 Layer", "4 Layer", "5 Layer"],
    CapiblityRange: [
      "300L",
      "500L",
      "750L",
      "1000L",
      "1500L",
      "2000L",
      "3000L",
      "5000L",
      "10000L",
    ],
    banners: [
      "/duralax/duralax.JPG",
      "/duralax/duralax1.JPG",
      "/duralax/duralax2.JPG",
      "/duralax/duralax3.JPG",
    ],
    key_features: [
      "Strong and durable body construction",
      "Suitable for regular water storage",
      "Designed for dependable performance",
      "Easy-to-use and practical for different installations",
      "Ideal for residential and commercial requirements",
    ],
    featuresBanner: "/images/verticalfeature.png",
    mobileFeaturesBanner: "/images/mobileverticalfeature.png",
    colors: ["White", "Yellow", "Blue", "Black"],
    layers_by_colour: {
      White: ["3-Layer", "4-Layer", "5-Layer"],
      Yellow: ["2-Layer"],
      Blue: ["2-Layer"],
      Black: ["2-Layer"],
    },
  },
  {
    id: "NANDHIPLUS-Water-Tanks",
    image: "/nandhi/nandhi.JPG",
    title: "NANDHI PLUS Water Tanks",
    description:
      "NANDHI PLUS is another reliable water storage brand offered by Mansi Plastic, developed to meet the everyday needs of customers looking for durable and economical water storage solutions. With an emphasis on quality and functionality, the tanks suit a variety of applications. Manufactured using LLDPE virgin material, they deliver enhanced strength, crack resistance, and hygienic water storage. Their robust construction makes them a practical option for dependable water storage.",
    href: "/product/NANDHIPLUS-Water-Tanks",
    Spacification: ["UV Stabilized", "Food Grade", "Durable Construction"],
    AvailableIn: ["2 Layer", "3 Layer", "4 Layer", "5 Layer"],
    CapiblityRange: [
      "300L",
      "500L",
      "750L",
      "1000L",
      "1500L",
      "2000L",
      "3000L",
      "5000L",
      "10000L",
    ],
    banners: [
      "/nandhi/nandhi.JPG",
      "/nandhi/nandhi1.JPG",
      "/nandhi/nandhi2.JPG",
      "/nandhi/nandhi3.JPG",
    ],
    key_features: [
      "Designed for durable and consistent performance",
      "Suitable for homes, offices, and commercial spaces",
      "Practical solution for everyday water storage",
      "Strong construction for regular usage",
      "Available in multiple capacities and options",
    ],
    featuresBanner: "/images/verticalfeature.png",
    mobileFeaturesBanner: "/images/mobileverticalfeature.png",
    colors: ["White", "yellow", "Blue", "Black"],
    layer_options_text: "3-Layer and 4-Layer in White; 2-Layer in Black",
    layers_by_colour: {
      White: ["3-Layer", "4-Layer", "5-Layer"],
      Yellow: ["2-Layer"],
      Blue: ["2-Layer"],
      Black: ["2-Layer"],
    },
  },
  {
    id: "SUNRISE-Water-Tanks",
    image: "/sunrise/sunrise.JPG",
    title: "SUNRISE Water Tanks",
    description:
      "SUNRISE, from Mansi Plastic, is a dependable water storage brand crafted to meet the everyday needs of homes, commercial spaces, and other applications. Manufactured using LLDPE (Linear Low-Density Polyethylene) virgin material, SUNRISE water tanks offer excellent strength, crack resistance, and hygienic water storage, ensuring long-lasting and safe performance. With a focus on durability and practicality, these tanks are designed to withstand regular usage and changing environmental conditions, making them a reliable choice for dependable water storage.",
    href: "/products/AASHIRWAD-Water-Tanks",
    Spacification: ["UV Stabilized", "Food Grade", "Durable Construction"],
    AvailableIn: ["2 Layer", "3 Layer", "4 Layer", "5 Layer"],
    CapiblityRange: [
      "300L",
      "500L",
      "750L",
      "1000L",
      "1500L",
      "2000L",
      "3000L",
      "5000L",
      "10000L",
    ],
    banners: [
      "/sunrise/sunrise.JPG",
      "/sunrise/sunrise1.JPG",
      "/sunrise/sunrise2.JPG",
      "/sunrise/sunrise3.JPG",
    ],
    key_features: [
      "Manufactured using LLDPE virgin material for superior strength and hygiene",
      "Strong and durable body construction",
      "Designed for safe and hygienic water storage",
      "Suitable for residential and commercial applications",
      "Withstands regular filling and emptying with ease",
      "Available in different capacities to suit varying requirements",
    ],
    featuresBanner: "/images/verticalfeature.png",
    mobileFeaturesBanner: "/images/mobileverticalfeature.png",
    colors: ["White", "Yellow", "Blue", "Black"],
    layer_options_text: "3-Layer and 4-Layer in White; 2-Layer in Black",
    layers_by_colour: {
      White: ["3-Layer", "4-Layer", "5-Layer"],
      Yellow: ["2-Layer"],
      Blue: ["2-Layer"],
      Black: ["2-Layer"],
    },
  },
];

export const stats: StatItem[] = [
  { icon: "years", value: 40, suffix: "+", label: "Years of Experience" },
  { icon: "team", value: 15, suffix: "+", label: "Qualified Team" },
  { icon: "clients", value: 90, suffix: "%", label: "Clients Served" },
  { icon: "targets", value: 95, suffix: "%", label: "Targets Achieved" },
];

export const testimonials: Testimonial[] = [
  {
    image: "https://picsum.photos/seed/mansi-t1/200/200",
    name: "Rajesh Malhotra",
    company: "Procurement Head, Apex Pharma",
    feedback:
      "Mansi Plastic has been a dependable water storage tank partner for years. Their film consistency and on-time delivery make planning easy on our end.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t2/200/200",
    name: "Sunita Rao",
    company: "Operations Manager, Bluewave Foods",
    feedback:
      "We switched to their water storage tank shrink wrap film for our production line and immediately saw fewer breakages and a cleaner finish on every pallet.",
  },
  {
    image: "https://picsum.photos/seed/mansi-t3/200/200",
    name: "Vikram Nair",
    company: "Director, Nair Glass Works",
    feedback:
      "Responsive team, tailor-made water storage tank specs, and consistent quality batch after batch. Exactly what we need from a water storage tank supplier.",
  },
];

export const companyVideo = {
  thumbnail: "https://picsum.photos/seed/mansi-video/1280/720",
  // Replace with an actual hosted video URL (mp4, or YouTube/Vimeo embed URL).
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "Inside Mansi Plastic",
};

export const productOptions = [
  "AASHIRWAD Water Tanks",
  "NANDHI PLUS Water Tanks",
  "DURALEX Water Tanks",
  "SUNRISE Water Tanks",
];

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

export const contactDetails = {
  email: "anjali@grank.co.in & alankritha@grank.co.in",
  phone: "+91 92465 48874",
  officeAddress:
    "H. No. 10-1-670/1/B, A.C. Guards, Near Rock Memorial High School, Khairatabad, Hyderabad – 500004",
  ManufacturingUnit:
    "Plot No. 130 & 131, IDA, Katedan, Rajendranagar Circle, Ranga Reddy District, Telangana – 500077",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const aboutSection = {
  heading: "About Mansi Plastic",
  body: "Mansi Plastic has been manufacturing water storage tanks that combine durability, quality, and reliable performance. Our products are made using quality raw materials and modern manufacturing processes to ensure long service life and safe water storage. ",
  subBody:
    "We manufacture tanks suitable for residential, commercial, and industrial applications, with options available in double-layer, triple-layer, and four-layer construction.",
  image: "/images/about.png",

  highlights: [
    "Superior Quality",
    "Innovative Designs",
    "Affordable Solutions",
    "Trusted Partner",
  ],
};
