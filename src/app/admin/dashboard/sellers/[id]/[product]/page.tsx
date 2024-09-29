import { PrdtDetails } from "@/app/sellers/dashboard/product-listings/[product_name]/(components)/Prdt_details";
import { useParams } from "next/navigation";

const SellerProductDetails = () => {
  const { product } = useParams();
  return (
    <div>
      <PrdtDetails product_name={product} />
    </div>
  );
};

export default SellerProductDetails;
