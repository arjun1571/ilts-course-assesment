import { Metadata } from "next";
import { fetchProduct } from "@/@service/apis/IltsContentService/ilts.service";
import ProductContent from "@/@components/page/HomeContent/HomeContent";
import Icon from "@/@components/core/Icon/Icon";

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
      <div className="relative lg:block hidden ">
        <div className="bg-gradient-to-br from-black to-blue-900 min-h-[300px] w-full absolute top-0 left-0"></div>
        <div className="relative flex items-center lg:min-h-[300px] min-h-[200px] text-white max-w-[1200px] mx-auto mt-[40px] ">
          <div className="w-[720px] mx-4 ">
            <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">{data?.data?.title}</h2>
            <div className="flex w-full items-center gap-1">
              <Icon name="star" className="text-yellow-600" />
              <Icon name="star" className="text-yellow-600" />
              <Icon name="star" className="text-yellow-600" />
              <Icon name="star" className="text-yellow-600" />
              <Icon name="star" className="text-yellow-600" />
              <span className=" py-3 lg:text-base text-xs">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
            </div>

            <div
              className="lg:text-base text-sm"
              dangerouslySetInnerHTML={{ __html: data?.data?.description || "" }}
            ></div>
          </div>
        </div>
      </div>

      <ProductContent data={data} />
    </div>
  );
}
