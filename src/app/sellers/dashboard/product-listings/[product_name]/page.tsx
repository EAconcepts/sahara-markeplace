"use client";

import { Header } from "@/app/dashboard/(components)/header";
import Image from "next/image";
import img1 from "@/assets/images/seller-details1.png";
import img2 from "@/assets/images/sellers-details2.png";
import { Cancel01Icon, Delete03Icon, PencilEdit01Icon } from "hugeicons-react";
import { Input } from "@/components/ui/input";
import Form2 from "./(components)/form2";
import { Button } from "@/components/ui/button";
import Form1 from "./(components)/form1";
import { useGet } from "@/utils/useGet.";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@/utils/useAuth";
import { PrdtDetails } from "./(components)/Prdt_details";

const ProductDetails = () => {
  const { product_name } = useParams();

  return (
    <div>
      <PrdtDetails product_name={product_name} />
    </div>
  );
};

export default ProductDetails;
