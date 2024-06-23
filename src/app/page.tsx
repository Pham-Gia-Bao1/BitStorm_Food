import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10 justify-between p-24 px-24 md:container md:mx-auto">
      <div className="flex-1 p-6 bg-gray-800 text-white">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="flex">
          <h1>Home page</h1>
        </div>
      </div>
    </main>
  );
}
