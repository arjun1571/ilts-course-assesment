import { Metadata } from "next";
import { fetchProduct } from "@/@service/apis/IltsContentService/ilts.service";
import ProductContent from "@/@components/page/HomeContent/HomeContent";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const data = await fetchProduct(params.lang as "en" | "bn");
  return {
    title: data?.data?.seo?.title || data.data.title,
    description: data?.data.seo?.description,
  };
}

export default async function ProductPage({ params }: { params: { lang: "en" | "bn" } }) {
  const data = await fetchProduct(params.lang);

  return (
    <div className="relative">
      <div>
        <div className="relative">
          <div className="bg-gradient-to-br from-black to-blue-900 min-h-[300px] w-full absolute top-0 left-0"></div>
          <div className="relative flex items-center min-h-[300px] text-white max-w-[1200px] mx-auto my-[40px]">
            <div className="w-[720px] mx-4">
              <h2 className="text-4xl font-semibold">{data?.data?.title}</h2>
              <p className="my-2">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
              <p>
                Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS
                Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the
                country.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <ProductContent data={data} />
    </div>
  );
}
