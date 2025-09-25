import { useState } from "react";
import foodItems from "../../JSON/FoodItem.json";
import FoodCard from "./FoodCard";

export default function FoodSection() {
  const categories = ["All", ...foodItems.map((item) => item.category)];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Track expanded subcategories
  const [expandedSubs, setExpandedSubs] = useState([]);

  const toggleShowMore = (subcategory) => {
    setExpandedSubs((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const getAllGroupedBySubcategory = () => {
    const grouped = {};

    foodItems.forEach((cat) => {
      cat.types.forEach((type) => {
        if (!grouped[type.subcategory]) {
          grouped[type.subcategory] = [];
        }
        grouped[type.subcategory].push(...type.items);
      });
    });

    return Object.entries(grouped).map(([subcategory, items]) => ({
      subcategory,
      items,
    }));
  };

  const currentData =
    selectedCategory === "All"
      ? getAllGroupedBySubcategory()
      : foodItems.find((item) => item.category === selectedCategory)?.types ||
        [];

  return (
    <div className="mt-8 px-4 max-w-5xl m-auto">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setExpandedSubs([]);
            }}
            className={`px-4 py-1.5 text-sm rounded-full border font-medium transition ${
              cat === selectedCategory
                ? "bg-black text-white border-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {currentData.map((type) => {
        const isExpanded = expandedSubs.includes(type.subcategory);
        const visibleItems = isExpanded ? type.items : type.items.slice(0, 4);

        return (
          <div key={type.subcategory} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{type.subcategory}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {visibleItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {type.items.length > 4 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => toggleShowMore(type.subcategory)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
