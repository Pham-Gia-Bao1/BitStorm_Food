"use client";
import Image from "next/image";
import ChefImage from "../assets/images/Chef.png";
import HomePageIntroduce from "@/components/card/HomePageIntroduce";
import HomePageCardSecondLevel from "@/components/card/HomePageCardSecondLevel";
import Slideshow from "@/components/slideshow/Slideshow";
import Footer from "@/components/layout/Footer";
import { useTheme } from "next-themes";

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

const cardData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 7l-.423 2.457-2.574.374 1.859 1.813-.439 2.561 2.305-1.213 2.305 1.213-.439-2.561 1.859-1.813-2.574-.374L14.25 7l-1.932 1.122L9.75 7z"
        />
      </svg>
    ),
    title: "Best Customer Service",
    description: "Recognized for outstanding customer service.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
        />
      </svg>
    ),
    title: "Award Winning",
    description: "Winner of 9 international business awards.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 10-8 0v3H4a4 4 0 000 8h16a4 4 0 000-8h-4V7z"
        />
      </svg>
    ),
    title: "Secure",
    description: "Top-level security measures for all users.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4a4 4 0 014 4v4a4 4 0 01-4 4v0a4 4 0 01-4-4V8a4 4 0 014-4z"
        />
      </svg>
    ),
    title: "User Friendly",
    description: "Easy to use and highly intuitive interface.",
  },
];

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center mt-10 justify-between md:container md:mx-auto w-full">
      <div className="flex-1 p-6 w-full">
        <div className={`${theme } flex items-center justify-center py-16 p-4`}>
          <div
            data-aos="fade-right"
            className="text-center w-96 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Expects Chef
            </h2>
            <p className=" mb-8 w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col space-y-4 mb-8 items-center">
              {IntroduceCard.map((item, index) => (
                <HomePageIntroduce key={index} content={item.content} />
              ))}
            </div>
            <div className="flex space-x-4 items-center justify-center">
              <button className={`${theme} px-6 py-2 rounded`}>
                Menu
              </button>
              <button className="bg-orange-500 px-6 py-2 rounded">
                Book a table
              </button>
            </div>
          </div>
          <div className="relative mt-16" data-aos="fade-left">
            <Image src={ChefImage} alt="Top image" />
          </div>
        </div>
        <div>
          <Slideshow />
        </div>
        <div className="w-full bg-orange-500 h-full flex flex-col items-center justify-center pb-20">
          <div className="text-center p-10 m-3 w-4/6 flex flex-col gap-2">
            <h1 className="text-2xl">
              Activities to make friends in new city{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              amet! Doloremque, illum et modi molestiae cum similique aliquid.
              Fuga sunt, voluptatem esse magnam laudantium illum eaque nisi
              fugit! Sapiente, amet.
            </p>
          </div>
          <div className="text-center p-4 m-3 w-5/6 flex  gap-2">
            {cardData.map((card, index) => (
              <HomePageCardSecondLevel
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
