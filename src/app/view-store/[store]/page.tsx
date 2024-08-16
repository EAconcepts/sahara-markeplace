import Image from "next/image";
import check from "@/assets/images/checkmark.svg";
import fb from "@/assets/images/fb-black.svg";
import insta from "@/assets/images/insta-black.svg";
import x from "@/assets/images/x-black.svg";
import afritique from "@/assets/images/afritique.png";
import usa from "@/assets/images/usa.svg";
import { PiScissorsDuotone } from "react-icons/pi";
// import { newArrivals } from "@/app/page";
import ProductCard from "@/app/(components)/productCard";
import review1 from "@/assets/images/review1.png"
import review2 from "@/assets/images/review2.png"
import review3 from "@/assets/images/review3.png"
import Reviews, { newArrivals } from "@/app/(components)/reviews";
import Newsletter from "@/app/(components)/newsletter";

const ViewStore = () => {
  const socials = [fb, insta, x];
  const filters = [
    "Women",
    "Men",
    "Children",
    "Bags",
    "Accessories",
    "Plus-Size Fashion",
  ];
   const reviews = [
    {
      image: review1,
      name: "Natalie Sharon",
      review:
        "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
    },
    {
      image: review2,
      name: "Natalie Sharon",
      review:
        "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
    },
    {
      image: review3,
      name: "Natalie Sharon",
      review:
        "Magnificent fabric of great beauty and elegance. All in a beautiful bag that gives the impression of having received a gift ",
    },
  ];
  return (
    <div className="px-[96px] py-[40px]">
      {/* Breadcrumb */}
      <div></div>
      <div className="mt-[40px] flex w-full flex-col">
        {/* Heading */}
        <div className="flex w-full flex-col border-b-[1px] border-border pb-[16px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-[12px]">
              <Image
                src={afritique}
                width={80}
                height={80}
                alt=""
                className="rounded-[100px] lg:size-[80px]"
              />
              <h3 className="font-playfair text-[32px] font-[600] leading-[46.4px] text-blackPrimary">
                Afritique-Benin
              </h3>
              <Image
                src={usa}
                width={48}
                height={32}
                alt=""
                className="lg:h-[32px] lg:w-[48px]"
              />
              {/* Trusted */}
              <div className="flex items-center gap-[8px] rounded-[24px] bg-[#94E08D33] px-[10px] py-[6px]">
                <Image
                  src={check}
                  width={16.67}
                  height={16.67}
                  className="size-[16.67px]"
                  alt=""
                />
                <span className="font-openSans text-[14px] font-[600] leading-[20px] text-[#35A42C]">
                  Trusted Seller
                </span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-x-[24px]">
              {socials.map((social, index) => (
                <Image
                  key={index}
                  src={social}
                  width={24}
                  height={24}
                  alt=""
                  className="lg:size-[24px]"
                />
              ))}
            </div>
          </div>
          {/* Description */}
          <p className="mt-[4px] font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
            Afritique is your one-stop shop for all things African! We celebrate
            the vibrant cultures, rich traditions, and stunning fashions of the
            African continent. Immerse yourself in our collection of unique and
            stylish clothing, exquisite home wears, and authentic accessories.
            Afritique is more than just a store; it&apos;s a cultural
            experience.{" "}
          </p>
          <div className="mt-[16px] flex w-fit items-center gap-x-[8px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <PiScissorsDuotone className="text-[22px] text-blackPrimary" />
            <span className="font-openSans text-[14px] font-[600] leading-[16.8px] tracking-[-2%] text-blackPrimary">
              Tailored and Custom Made
            </span>
          </div>
        </div>
        {/* Products */}
        <div className="mt-[32px] flex flex-col">
            {/* Filters */}
          <div className="flex flex-col gap-y-[24px]">
            <p className="font-openSans text-[16px] font-[600] leading-[23.2px] text-[#101928]">
              20 Products In Store
            </p>
            <div className="flex items-center gap-x-[12px]">
              {filters?.map((filter, index) => (
                <button
                  key={index}
                  className="rounded-[8px] border-[1px] border-border px-[24px] py-[8px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Products */}
          <div className="grid lg:grid-cols-4 mt-[32px] gap-y-[32px] gap-x-[24px]">
            {newArrivals?.map((product, index)=>(
                <ProductCard key={index} product={product}/>
            ))}
            {/* Pagination */}
            <div></div>
          </div>
        </div>
        {/* Reviews */}
        <div className="mt-[40px]">
            <Reviews reviews={reviews}/>
        </div>
        {/* Newsletter */}
        <div className="mt-[40px]">
            <Newsletter/>
        </div>
      </div>
    </div>
  );
};

export default ViewStore;
