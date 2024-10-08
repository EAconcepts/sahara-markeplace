import Image from "next/image";
import about from "@/assets/images/about.png";
import aboutlg from "@/assets/images/aboutlg.png";
import innovation from "@/assets/images/innovation.svg";
import sustainability from "@/assets/images/sustainability.svg";
import community from "@/assets/images/community.svg";
import checkmark from "@/assets/images/checkmarkblack.svg";
import agreement from "@/assets/images/agreement.svg";
import global from "@/assets/images/global.svg";
import ubong from "@/assets/images/ubong.png";
import {
  Facebook01Icon,
  Facebook02Icon,
  Linkedin01Icon,
  Linkedin02Icon,
  TwitterIcon,
} from "hugeicons-react";
import { RiTwitterXLine } from "react-icons/ri";

const About = () => {
  const coreValues = [
    {
      title: "Innovation",
      desc: "We foster a culture of embracing new ideas and technologies to enhance our products, and services while minimizing our environmental impact.",
      icon: innovation,
    },
    {
      title: "Authenticity",
      desc: "We celebrate the genuine spirit of African creativity and heritage, products and stories are accurately represented and with integrity.",
      icon: checkmark,
    },
    {
      title: "Sustainability",
      desc: "We are committed to minimizing our ecological  by promoting eco-friendly practices throughout our operations.",
      icon: sustainability,
    },
    {
      title: "Community",
      desc: "We foster and cultivate a global community connected by a shared passion for African culture and ethical consumerism.",
      icon: community,
    },
    {
      title: "Quality",
      desc: "We deliver a premium marketplace experience with exceptional products, transparent trade, and a commitment to ethical sourcing.",
      icon: checkmark,
    },
  ];
  const feat = [
    {
      icon: checkmark,
      title: "Authentic African Products",
    },
    {
      icon: agreement,
      title: "Direct Connection",
    },
    {
      icon: global,
      title: "Global Impact",
    },
    {
      icon: community,
      title: "Cultural Richness",
    },
    {
      icon: checkmark,
      title: "Direct Impact",
    },
  ];
  const teams = [
    {
      img: ubong,
      name: "Mr. Ubon Isang",
      role: "CEO",
      bio: "Founded Sahara Eagle with a vision to transform African economies by connecting local producers to global consumers, this lead to economic growth and community empowerment.",
    },
    {
      img: ubong,
      name: "Dr. Edward Maltass",
      role: "Partner & Board Chair",
      bio: "Dr. Edward Maltass, CEO of EVI Holdings, leads Sahara Eagle as Partner and Board Chair. His financial expertise drives our global expansion.",
    },
  ];
  return (
    <div className="flex w-full flex-col">
      {/* hero */}
      <div className="relative w-full">
        <Image
          src={about}
          width={430}
          height={660}
          alt="sahara"
          className="h-[660px] w-full lg:hidden"
        />
        <Image
          src={aboutlg}
          width={1440}
          height={595}
          alt="sahara"
          className="h-[595px] w-full max-lg:hidden"
        />
        <div className="absolute top-0 flex w-full flex-col gap-[40px] px-[24px] pt-[55px] lg:items-center lg:gap-[64px] lg:px-[96px] lg:pt-[97px]">
          <h3 className="text-[36px] font-[700] leading-[52.2px] text-white lg:text-[60px] lg:leading-[87px]">
            About Sahara Eagle
          </h3>
          <div className="flex flex-col gap-[32px] lg:items-center">
            <h5 className="text-[24px] font-[600] leading-[34.8px] text-white lg:text-center lg:text-[30px]">
              Sahara Eagle – Connecting Continents, Unveiling the Beauty of
              Africa to the World and Empowering Communities
            </h5>
            <p className="text-[14px] font-[400] leading-[22.4px] text-white lg:text-center lg:text-[16px]">
              At Sahara Eagle, we go beyond being an e-commerce platform; we are
              the bridge that unites cultures, your gateway to the vibrant
              tapestry of African art, fashion, and flavors. We link passionate
              African artisans, farmers, and entrepreneurs with a global
              audience. Our commitment to authenticity, sustainability, and
              cultural celebration defines our journey. We are a cultural bridge
              connecting continents and empowering communities. We strive to
              showcase the rich cultural heritage, craftsmanship, and
              authenticity of Africa. Through our marketplace, we provide a
              global stage for African talents, allowing their unique products
              to resonate with audiences worldwide.
            </p>
          </div>
        </div>
      </div>
      {/* Vision */}
      <div className="flex w-full flex-col gap-[32px] px-[24px] py-[64px] lg:px-[96px] lg:py-[80px]">
        <div className="flex flex-col gap-[4px] lg:gap-[8px]">
          <h6 className="text-center text-[14px] font-[700] leading-[22.4px] text-greenPrimary lg:text-[16px]">
            Vision
          </h6>
          <h4 className="text-center text-[20px] font-[600] leading-[29px] text-blackPrimary lg:text-[30px] lg:leading-[25.6px]">
            Empowering Communities, Inspiring the World
          </h4>
        </div>
        <p className="text-center text-[14px] font-[400] leading-[22.4px] text-blackPrimary lg:text-[16px] lg:leading-[25.6px]">
          We envision a future where African communities flourish and thrive. As
          pioneers in ethical and sustainable trade, we aspire to lead the
          charge in bridging the gap between producers and consumers worldwide.
          Our goal is to foster shared prosperity and to empower the next
          generation of Africa&apos;s leaders and innovators.
        </p>
        <div className="flex w-full gap-[24px] max-lg:justify-between lg:justify-center">
          {/* Countries */}
          <div className="flex flex-col lg:w-[224px] lg:items-center">
            <h1 className="text-[36px] font-[600] leading-[57.6px] text-black lg:text-[48px] lg:leading-[76.8px]">
              120+
            </h1>
            <span className="text-center text-[12px] font-[400] leading-[19.2px] text-[#787C83] lg:text-[16px] lg:leading-[25.6px]">
              Countries
            </span>
          </div>
          {/* Product sold */}
          <div className="flex flex-col lg:w-[224px] lg:items-center">
            <h1 className="text-[36px] font-[600] leading-[57.6px] text-black lg:text-[48px] lg:leading-[76.8px]">
              7K
            </h1>
            <span className="text-center text-[12px] font-[400] leading-[19.2px] text-[#787C83] lg:text-[16px] lg:leading-[25.6px]">
              Product Sold{" "}
            </span>
          </div>
          {/* Shops Active */}
          <div className="flex flex-col lg:w-[224px] lg:items-center">
            <h1 className="text-[36px] font-[600] leading-[57.6px] text-black lg:text-[48px] lg:leading-[76.8px]">
              2K
            </h1>
            <span className="text-center text-[12px] font-[400] leading-[19.2px] text-[#787C83] lg:text-[16px] lg:leading-[25.6px]">
              Shops Active
            </span>
          </div>
        </div>
      </div>
      {/* Mission  */}
      <div className="flex w-full flex-col gap-[32px] px-[24px] py-[64px] lg:px-[96px]">
        <div className="flex flex-col gap-[4px] lg:gap-[8px]">
          <h5 className="text-center text-[14px] font-[400] leading-[22.4px] text-greenPrimary lg:text-[16px]">
            Mission
          </h5>
          <h4 className="text-center text-[20px] font-[600] leading-[29px] text-blackPrimary lg:text-[30px] lg:leading-[43.5px]">
            Celebrating African Heritage and Nurturing Global Connections
          </h4>
        </div>
        <p className="text-center text-[14px] font-[400] leading-[22.4px] text-blackPrimary lg:text-[16px] lg:leading-[25.6px]">
          We transcend the role of a typical e-commerce platform. We serve as a
          vital link, connecting Africa&apos;s dynamic farmers, entrepreneurs,
          and artisans directly with global markets and conscientious consumers.
          Through our platform, we empower them by dismantling barriers,
          promoting fair trade practices, and unlocking unprecedented economic
          opportunities.
        </p>
      </div>
      {/* Core Values */}
      <div className="flex flex-col gap-[24px] px-[24px] py-[64px] lg:gap-[32px] lg:px-[96px]">
        <h5 className="text-center text-[20px] font-[600] text-blackPrimary lg:text-[30px] lg:leading-[43.5px]">
          Our Core Values
        </h5>
        <div className="flex w-full gap-[24px] max-lg:flex-col lg:flex-wrap lg:justify-center">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center lg:w-[400px]"
            >
              <Image
                src={value.icon}
                width={40}
                height={40}
                alt=""
                className="size-[40px] lg:size-[72px]"
              />
              <div className="flex flex-col gap-[8px]">
                <h6 className="text-center text-[16px] font-[600] leading-[25.6px] text-blackPrimary lg:text-[24px]">
                  {value.title}
                </h6>
                <p className="text-center text-[12px] font-[400] leading-[19.2px] text-blackPrimary lg:text-[16px]">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why choose Sahara */}
      <div className="flex flex-col gap-[40px] px-[24px] py-[64px] lg:px-[96px]">
        <h3 className="text-center text-[20px] font-[600] leading-[29px] text-blackPrimary">
          Why Choose Sahara Eagles
        </h3>
        <div className="flex w-full flex-wrap justify-center gap-x-[16px] gap-y-[40px] lg:px-[104px]">
          {feat.map((ft, index) => (
            <div
              key={index}
              className="flex w-[180px] flex-col items-center gap-[12px] lg:w-[320px]"
            >
              <Image
                src={ft.icon}
                width={40}
                height={40}
                alt={ft.title}
                className="size-[40px] lg:size-[72px]"
              />
              <p className="text-center text-[16px] font-[600] leading-[25.6px] text-blackPrimary lg:text-[24px]">
                {ft.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Meet The Team */}
      <div className="flex w-full flex-col gap-[32px] px-[24px] py-[48px] lg:px-[96px]">
        <h4 className="text-center text-[20px] font-[600] leading-[29px] lg:text-[30px]">
          Meet the Team
        </h4>
        <div className="flex flex-col gap-[24px] lg:grid lg:grid-cols-3">
          {teams.map((team, index) => (
            <div className="flex w-full flex-col gap-[24px]" key={index}>
              <Image
                src={team.img}
                width={382}
                height={382}
                alt={team.name}
                className="size-[382px] rounded-[8px] max-lg:w-full"
              />
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <h4 className="text-[20px] font-[600] leading-[29px] text-blackPrimary lg:text-[30px]">
                    {team.name}
                  </h4>
                  <span className="text-[16px] font-[600] leading-[23.2px] text-greenPrimary">
                    {team.role}
                  </span>
                </div>
                <p className="text-[14px] font-[400] leading-[22.4px] text-blackPrimary">
                  {team.bio}
                </p>
                {/* Socials */}
                <div className="flex w-full gap-[12px]">
                  <Facebook02Icon className="size-[18px]" />
                  <RiTwitterXLine className="size-[18px]" />
                  <Linkedin02Icon className="size-[18px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
