"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import { Cancel01Icon } from "hugeicons-react";
import Image from "next/image";
import { useState } from "react";

const Blogs = () => {
  const [editBlog, setEditBlog] = useState<boolean>(false);
  return (
    <div className="flex w-full flex-col gap-[32px] pt-[24px] font-openSans">
      <Header title="Blog Content" />
      <section className="flex gap-[16px]">
        {/* Col-1 */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h6 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
              Blog Title
            </h6>
            <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              The Alluring World Of Ghanaian Kente Cloth
            </p>
          </div>
          <div className="flex w-full flex-col gap-[16px] rounded-[12px] border-[1px] border-border p-[16px]">
            <div className="flex w-full justify-between px-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Images
              </span>
              <Cancel01Icon className="size-[20px] text-failure" />
            </div>
            <Image
              src={""}
              width={368}
              height={220}
              alt="image"
              className="h-[220px] w-full object-cover"
            />
          </div>
          <Button
            className="w-fiit h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] leading-[20.3px] text-[#787C83]"
            variant={"outline"}
          >
            Change Image
          </Button>
        </div>
        {/* Col-2 */}
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex w-full flex-col gap-[24px] rounded-[12px] border-[1px] border-border px-[16px] py-[24px]">
            <div className="flex flex-col gap-[8px] pt-[12px]">
              {/* Cancel */}
              <div className="flex w-full justify-between px-[8px]">
                <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Content
                </span>
                <Cancel01Icon className="size-[20px] text-failure" />
              </div>
              {/* Content */}
              <pre
                contentEditable={editBlog ? true : false}
                autoFocus={editBlog ? true : false}
                className="w-full text-wrap break-words rounded-[6px] border-[1px] border-border p-[12px] font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
              >
                Kente cloth, a vibrant and intricate textile, is an iconic
                symbol of Ghanaian culture and heritage. Woven by skilled
                artisans, this masterpiece showcases the rich tapestry of
                Ghanaian traditions and artistry. The Art of Weaving: The
                creation of Kente cloth is a meticulous process, passed down
                through generations. It involves weaving colorful silk and
                cotton threads into complex patterns that tell stories of
                history, folklore, and societal values. The weavers, often men,
                meticulously hand-weave the cloth on wooden looms, while women
                play a crucial role in dyeing the threads with natural dyes.
                Symbolism and Meaning: Each Kente pattern carries deep
                symbolism, representing various aspects of life, spirituality,
                and social hierarchy. The colors and designs are carefully
                chosen to convey specific messages and stories. Modern
                Interpretations: While Kente cloth remains deeply rooted in
                tradition, it has also evolved to embrace contemporary fashion
                trends. Modern designers incorporate Kente elements into
                clothing, accessories, and home decor, bringing this iconic
                textile to a wider audience. Preserving Heritage: Efforts are
                underway to preserve the art of Kente weaving and promote its
                appreciation among younger generations. By supporting Kente
                cloth artisans and incorporating it into modern designs, we can
                ensure the legacy of this cultural treasure lives on.
              </pre>
            </div>
            <Button
              onClick={() => setEditBlog(true)}
              className="w-fiit h-[32px] rounded-[4px] border-border px-[16px] py-[6px] text-[14px] leading-[20.3px] text-[#787C83]"
              variant={"outline"}
            >
              Edit blog Content
            </Button>
            <div className="flex gap-[12px]">
              <Button className="h-[44px] w-fit rounded-[4px] px-[24px] py-[12px]">
                Publish Blog
              </Button>
              <Button
                variant={"outline"}
                className="h-[44px] w-fit rounded-[4px] border-failure px-[24px] py-[12px] text-failure"
              >
                Delete Blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
