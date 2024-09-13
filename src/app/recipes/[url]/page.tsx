const RecipeDetails = () => {
  const tags = ["Dinner", "Baking", "Meat & Chicken"];
  return (
    <div className="px-[24px] lg:px-[96px]">
      {/* title */}
      <div className="mt-[32px] flex flex-col gap-y-[24px]">
        <div className="flex flex-col gap-[16px]">
          {/* Tags & Title */}
          <div className="flex flex-col gap-y-[4px]">
            {/* Tags */}
            <div className="flex gap-[16px] divide-x-[1px] divide-greenPrimary">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-[14px] font-[600] leading-[23.2px] text-greenPrimary lg:text-[16px] [&:not(:first-child)]:pl-[16px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Title */}
            <h2 className="text-[36px] font-[600] leading-[52.2px] text-blackPrimary lg:text-[60px] lg:leading-[87px]">
              Bunny Chow (Chicken Curry Rolls)
            </h2>
          </div>
          {/* Time */}
          <div className="divide-x-border flex gap-[8px] max-lg:flex-col lg:gap-[24px] lg:divide-x-[1px]">
            <div className="flex gap-x-[4px] text-[14px] font-[400] leading-[20.3px] lg:text-[20px]">
              <span>Preparation Time:</span>
              <span className="font-[600]">20 Minutes</span>
            </div>
            {/* Cooking time */}
            <div className="flex gap-x-[4px] pl-[24px] text-[14px] font-[400] leading-[20.3px] lg:text-[20px]">
              <span>Cooking Time:</span>
              <span className="font-[600]">56 Minutes</span>
            </div>
          </div>
          <video
            src={""}
            controls
            width={1000}
            height={440}
            className="h-[248px] w-full rounded-[8px] lg:h-[440px]"
          />
          <p className="text-[14px] font-[400] leading-[20.3px] lg:text-[16px]">
            South African bunny chow which comprises curry in a hollowed out
            bread loaf, is a budget-friendly meal loved for its portability and
            rich, hearty flavors. This recipe offers a delicious and flavorful
            vegetarian option, but you can easily adapt it to include chicken or
            other proteins.
          </p>
          <pre></pre>
        </div>
      </div>
      {/* Video */}
      <div></div>
    </div>
  );
};

export default RecipeDetails;
