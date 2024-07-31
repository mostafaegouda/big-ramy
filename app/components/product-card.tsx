import { Link } from "@remix-run/react";
import { InfoIcon } from "lucide-react";
import { ProductResponse } from "~/types";

type Props = {
  product: ProductResponse["data"];
};

function ProductCard({ product }: Props) {
  return (
    <Link
      key={product.id}
      to={`/ebooks/${product.id}`}
      className="bg-[#1E1E1E]"
    >
      <div className="h-[200px]">
        <img
          className="object-cover object-center w-full h-full"
          src={product.attributes.book.image_url}
          alt={product.attributes.name}
        />
      </div>
      <div className="p-2">
        <p className="font-bold text-2xl line-clamp-1 mb-2">
          {product.attributes.name}
        </p>
        <p className="flex gap-3 items-end mb-5">
          <span>USD</span>
          <span className="text-2xl font-bold">{product.attributes.price}</span>
        </p>
        <div className="flex gap-2">
          <Link
            to={`/ebooks/${product.id}`}
            className="bg-[#55E749] text-black px-2 py-2 uppercase font-bold text-lg flex-1 text-center"
          >
            Show Details
          </Link>
          <Link
            to={`/ebooks/${product.id}/buy`}
            className="px-2 py-2 border border-[#55E749] text-[#55E749]"
          >
            <InfoIcon />
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
