import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import ProductCard from "~/components/product-card";
import { ProductsResponse } from "~/types";

const categories = [
  {
    name: "All",
    slug: "All",
  },
  {
    name: "Flexibility Training",
    slug: 6,
  },
  {
    name: "Weight Training",
    slug: 5,
  },
  {
    name: "Cardio Training",
    slug: 4,
  },
  {
    name: "Courses",
    slug: 3,
  },
  {
    name: "Fitness Mindset",
    slug: 7,
  },
  {
    name: "Online Learning",
    slug: 1,
  },
];

export async function loader() {
  const productsResponse = await fetch(
    "http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book"
  );
  const products = (await productsResponse.json()) as ProductsResponse;
  return { productsResponse: products };
}

export default function Ebooks() {
  const { productsResponse } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  return (
    <main className="container py-10">
      <h1 className="text-4xl font-bold mb-5">E-books</h1>
      <div className="flex gap-5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={{
              search: `?category=${category.slug}`,
            }}
            className="px-2 py-2 min-w-[170px] text-lg text-center hover:bg-gray-50/10"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-5 py-10">
        {productsResponse.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        {currentPage !== 1 && (
          <Link
            to={{
              search: `?page=${currentPage - 1}`,
            }}
          >
            Previous
          </Link>
        )}
        {new Array(productsResponse.meta.total_pages)
          .fill("")
          .map((page, i) => (
            <Link
              key={i}
              to={{
                search: `?page=${i + 1}`,
              }}
              className="border border-[#55E749] text-[#55E749] px-5 py-3"
            >
              1
            </Link>
          ))}
        {currentPage < productsResponse.meta.total_pages && (
          <Link
            to={{
              search: `?page=${currentPage + 1}`,
            }}
          >
            Next
          </Link>
        )}
      </div>
    </main>
  );
}
