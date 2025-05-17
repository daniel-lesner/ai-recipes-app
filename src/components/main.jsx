import Favorites from "./favorites";

export default function Main() {
  const recipes = [
    {
      name: "Apple Pie",
      time: 20,
      image:
        "https://cakesbymk.com/wp-content/uploads/2024/11/Template-Size-for-Blog-5.jpg",
    },
    {
      name: "Chocolate Cake",
      time: 30,
      image:
        "https://cakesbymk.com/wp-content/uploads/2024/11/Template-Size-for-Blog-5.jpg",
    },
    {
      name: "Vanilla Cake",
      time: 25,
      image:
        "https://cakesbymk.com/wp-content/uploads/2024/11/Template-Size-for-Blog-5.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <Favorites recipes={recipes} />
    </div>
  );
}
