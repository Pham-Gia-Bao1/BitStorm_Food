import Image from "next/image";
import ChefImage from "../assets/images/chef_1.png";
import HomePageIntroduce from "@/components/card/HomePageIntroduce";
const IntroduceCard = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10 justify-between md:container md:mx-auto w-full">
      <div className="flex-1 p-6 bg-gray-800  w-full">
        <div className="flex items-center justify-center py-16 bg-gray-900 p-4">
          <div data-aos="fade-right" className="text-center flex-2">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our Expects Chef
            </h2>
            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col space-y-4 mb-8 items-center">
              {IntroduceCard.map((item, index) => (
                <HomePageIntroduce key={index} content={item.content} />
              ))}
            </div>
            <div className="flex space-x-4 items-center justify-center">
              <button className="bg-black text-white px-6 py-2 rounded">
                Menu
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded">
                Book a table
              </button>
            </div>
          </div>
          <div className="relative mt-16" data-aos="fade-left">
            <Image src={ChefImage} alt="Top image" />
          </div>
        </div>
      </div>
    </main>
  );
}
