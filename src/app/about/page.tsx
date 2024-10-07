import Image from "next/image";
import about from "@/assets/images/about.png";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      {/* hero */}
      <div className="relative w-full">
        <Image
          src={about}
          width={430}
          height={660}
          alt="sahara"
          className="h-[660px] w-full"
        />
        <div className="absolute top-0 flex w-full flex-col gap-[40px] px-[24px] pt-[55px]">
          <h3 className="text-[36px] font-[700] leading-[52.2px] text-white">
            About Sahara Eagle
          </h3>
          <div className="flex flex-col gap-[32px]">
            <h5 className="text-[24px] font-[600] leading-[34.8px] text-white">
              Sahara Eagle – Connecting Continents, Unveiling the Beauty of
              Africa to the World and Empowering Communities
            </h5>
            <p className="text-[14px] font-[400] leading-[22.4px] text-white">
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
      <div className="flex w-full flex-col gap-[32px] px-[24px] py-[64px]">
        <div className="flex flex-col gap-[4px]">
          <h6 className="text-center text-[14px] font-[700] leading-[22.4px] text-greenPrimary">
            Vision
          </h6>
          <h4 className="text-center text-[20px] font-[600] leading-[29px] text-blackPrimary">
            Empowering Communities, Inspiring the World
          </h4>
        </div>
        <p className="text-center text-[14px] font-[400] leading-[22.4px] text-blackPrimary">
          We envision a future where African communities flourish and thrive. As
          pioneers in ethical and sustainable trade, we aspire to lead the
          charge in bridging the gap between producers and consumers worldwide.
          Our goal is to foster shared prosperity and to empower the next
          generation of Africa&apos;s leaders and innovators.
        </p>
        <div className="flex gap-[24px]"></div>
      </div>
    </div>
  );
};

export default About;
