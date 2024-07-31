import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import { ProductResponse } from "~/types";

export async function loader({ params }: LoaderFunctionArgs) {
  const productResponse = await fetch(
    "http://3.65.32.166/api/v2/storefront/products/" + params.id
  );
  const product = (await productResponse.json()) as ProductResponse;
  return { productResponse: product };
}

export default function Ebooks() {
  const { productResponse } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <main className="container py-10">
      <div className="flex items-center gap-5 text-3xl font-bold mb-5">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft size={25} />
        </button>
        {productResponse.data.attributes.name}
      </div>
      <div className="flex gap-10">
        <div className="basis-[300px] bg-[#1E1E1E] p-5 font-bold text-2xl">
          <div className="py-2 px-2">Pages</div>
          <div className="py-2 px-2">Bookmarks</div>
        </div>
        <div className="flex-1">
          <div className="font-bold text-2xl mb-5">Page</div>
          <iframe
            title={productResponse.data.attributes.name}
            src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
            className="w-full h-[600px]"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
