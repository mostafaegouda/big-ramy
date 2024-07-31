export type Product = {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string | null;
    available_on: string;
    slug: string;
    meta_description: string | null;
    meta_keywords: string | null;
    updated_at: string;
    sku: string;
    public_metadata: Record<string, unknown>;
    purchasable: boolean;
    in_stock: boolean;
    backorderable: boolean;
    available: boolean;
    currency: string;
    price: number;
    display_price: string;
    compare_at_price: number;
    display_compare_at_price: string;
    product_type: string;
    avg_review: number;
    num_of_reviews: number;
    book: {
      type: string;
      id: number;
      title: string;
      description: string;
      image_url: string;
      num_of_pages: number;
      num_of_chapters: number;
      product_id: number;
      created_at: string;
      updated_at: string;
    };
    is_available_to_purchase: boolean;
    is_purchased_by_current_user: boolean;
    is_added_to_cart_by_current_user: boolean;
  };
  relationships: {
    variants: { data: Array<unknown> };
    option_types: { data: Array<unknown> };
    product_properties: { data: Array<unknown> };
    taxons: { data: Array<unknown> };
    images: { data: Array<unknown> };
    default_variant: { data: { id: string; type: string } };
    primary_variant: { data: { id: string; type: string } };
  };
};

export type ProductsResponse = {
  data: Product[];
  meta: {
    count: number;
    total_count: number;
    total_pages: number;
    filters: {
      option_types: Array<unknown>;
      product_properties: Array<unknown>;
    };
  };
  links: {
    self: string;
    next: string;
    prev: string;
    last: string;
    first: string;
  };
  extra_data: Record<string, unknown>;
};

export type ProductResponse = {
  data: Product;
  extra_data: Record<string, unknown>;
};
