import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 px-24 md:container md:mx-auto">
      <div className="flex-1 p-6 bg-gray-800 text-white">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="flex">
         
          <div className="flex-1 ml-4 bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl mb-4">Products Management</h2>
            <div className="flex justify-between mb-4">
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-red-500 rounded">
                  Hot Dishes
                </button>
                <button className="px-4 py-2 bg-gray-600 rounded">
                  Cold Dishes
                </button>
                <button className="px-4 py-2 bg-gray-600 rounded">Soup</button>
                <button className="px-4 py-2 bg-gray-600 rounded">Grill</button>
                <button className="px-4 py-2 bg-gray-600 rounded">
                  Appetizer
                </button>
                <button className="px-4 py-2 bg-gray-600 rounded">
                  Dessert
                </button>
              </div>
              <button className="px-4 py-2 bg-gray-600 rounded">
                Manage Categories
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-pink-500 h-48 rounded-lg">
                <span className="text-pink-500">+</span>
                <span>Add new dish</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <img
                  src="/path/to/image1.jpg"
                  alt="Dish 1"
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="mt-2">Spicy seasoned seafood noodles</h3>
                <p>$2.29 • 20 Bowls</p>
                <button className="mt-2 px-4 py-2 bg-red-500 rounded">
                  Edit dish
                </button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <img
                  src="/path/to/image2.jpg"
                  alt="Dish 2"
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="mt-2">Salted Pasta with mushroom sauce</h3>
                <p>$2.69 • 30 Bowls</p>
                <button className="mt-2 px-4 py-2 bg-red-500 rounded">
                  Edit dish
                </button>
              </div>
              {/* Add more dish items here */}
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-gray-600 rounded mr-2">
                Discard Changes
              </button>
              <button className="px-4 py-2 bg-pink-500 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
