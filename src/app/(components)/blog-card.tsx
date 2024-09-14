import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import blog1 from "@/assets/images/blog1.png";
import blog2 from "@/assets/images/blog2.png";
import blog3 from "@/assets/images/blog3.png";
import blog4 from "@/assets/images/blog4.png";
import { useRouter } from "next/navigation";

export const blogs = [
  {
    image: blog1,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog2,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog3,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog4,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
];
const BlogCard = ({ story }: any) => {
  const router = useRouter();
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="flex h-[268px] w-full w[155px] flex-col rounded-[12px] bg-[#F9E79F99] px-[8px] py-[12px] font-openSans text-blackPrimary lg:h-[394px] lg:w[294px] lg:rounded-[24px] lg:px-[16px]">
      <Image
        src={`${imgBaseUrl}/${story?.image}`}
        width={270}
        height={180}
        alt={story.title}
        className="h-[102px] w-full w[167px] rounded-[8px] lg:h-[180px] lg:w[270px] lg:rounded-[16px]"
      />
      <div className="flex flex-col gap-y-[12px] pt-[4px] lg:px-[4px]">
        <h3 className="line-clamp-2 text-[14px] font-[700] leading-[20.3px] text-blackPrimary lg:text-[20px] lg:leading-[29px]">
          {story.title}
        </h3>
        <p className="line-clamp-3 text-[12px] font-[400] leading-[17.4px] lg:text-[14px] lg:leading-[20.3px]">
          {story.content}
        </p>
        <div className="flex justify-between">
          <button
            onClick={() =>
              router.push(`/blogs/${encodeURIComponent(story?.url)}`)
            }
            className="w-fit text-[12px] font-[600] leading-[23.2px] lg:text-[16px]"
          >
            Read More...
          </button>
          <IoArrowForwardCircleOutline className="text-blackPrimary lg:text-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
