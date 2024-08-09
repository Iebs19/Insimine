import React from "react";
import RevealCard from "@/components/RevealCard";
import ShimmerButton from "@/components/magicui/shimmer-button";
const blogs = [
  {
    title: "Enhancing Clinical Trial Data Management with Advanced Data Lakes",
    image: "src/assets/Data_Lake.png",
    text: "A leading pharmaceutical company was facing significant challenges in managing its clinical trial data. The variety and volume of data collected during clinical trials increased exponentially, leading to inefficiencies in data retrieval, analysis, and reporting. Traditional data warehousing solutions were no longer sufficient to handle the complex and large-scale data requirements.",
  },
  {
    title:
      "Optimizing Supply Chain Management in Medical Devices with AI and GenAI",
    image: "src/assets/GenAI.png",
    text: "A global medical device manufacturer faced challenges in its supply chain management, including demand forecasting inaccuracies, inventory management issues, and delayed deliveries. Traditional methods of supply chain management were proving to be inefficient, leading to increased operational costs and customer dissatisfaction.",
  },
  {
    title: "Enhancing Patient Monitoring with AI-Powered IoT Solutions",
    image: "src/assets/Data_Eng.png",
    text: "A leading medical device company was struggling with inefficiencies in patient monitoring due to fragmented data sources and manual processes. The lack of real-time data integration and analysis was hindering the ability to provide timely and accurate patient care.",
  },
];



const InsightsColumn = ({ title, href }) => {
  return (
    <div>
      <div className="font-nas text-3xl ml-16">
        {title}
        <span className="block mt-2 h-[2px]  origin-left rounded-full bg-lightBlue/60" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {blogs.map((blog, index) => (
          <RevealCard key={index} title={blog.title} image={blog.image} />
        ))}
      </div>
      <div className="flex justify-center p-4">
            <ShimmerButton
                className="shadow-2xl"
                background="darkBlue"
                borderRadius="4px"
                href={href}
            >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    View all
                </span>
            </ShimmerButton>
        </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div className="flex flex-col justify-center pt-4 gap-8">
      <div className="font-nas font-bold text-7xl">Insights</div>
      <div className="flex flex-col gap-8">
        <InsightsColumn title="Blogs" href="/blogs"/>
        <InsightsColumn title="Case Stuides" href="/case-studies"/>
        <InsightsColumn title="White Paper" href="/white-papers"/>
      </div>
    </div>
  );
};

export default Insights;
