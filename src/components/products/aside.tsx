import { Search, Star } from "lucide-react";

const Aside = () => {
  const colorOptions = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Green", hex: "#10B981" },
    { name: "Purple", hex: "#8B5CF6" },
  ];

  return (
    <div>
      <aside className="hidden xl:block w-80 border-r border-[rgba(191,191,197,0.1)] p-6 space-y-2 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-visible bg-[#101622]">
        <div className="flex items-center rounded-lg h-10 bg-[#1d2536] border border-[rgba(191,191,197,0.1)]">
          <Search className="w-5 h-5 text-[#bfbfc5] ml-3" />
          <input
            type="text"
            placeholder="Search within results"
            className="flex-1 bg-transparent border-none px-3 text-white placeholder-[#bfbfc5] focus:outline-none text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-[#edeff5] font-semibold">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            defaultValue="500"
            className="w-full h-2 bg-[#1d2536] rounded-lg accent-[#3f3fdd] cursor-pointer"
          />
          <div className="flex justify-between text-sm text-[#bfbfc5]">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-[#edeff5] font-semibold">Category</h3>
          <div className="space-y-2 text-sm text-[#bfbfc5]">
            {["Men", "Women", "Kids", "Accessories", "Shoes"].map(
              (cat, idx) => (
                <label
                  key={cat}
                  className="flex items-center cursor-pointer hover:text-[#edeff5]"
                >
                  <input
                    type="checkbox"
                    defaultChecked={cat === "Women"}
                    className="w-4 h-4 rounded bg-[#1d2536] border border-[rgba(191,191,197,0.3)] text-[#3f3fdd] cursor-pointer"
                  />
                  <span className="ml-3">{cat}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-[#edeff5] font-semibold">Color</h3>
          <div className="flex flex-wrap gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                className="w-6 h-6 rounded-full border-2 border-[rgba(191,191,197,0.2)] hover:border-[#3f3fdd] transition-colors"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-1.5">
          <h3 className="text-[#edeff5] font-semibold">Size</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {/* {sizeOptions.map(size => (
                <button key={size} className={`px-3 py-1 rounded-lg transition-colors ${size === 'S' ? 'bg-[#3f3fdd] text-white' : 'bg-[#1d2536] text-[#edeff5] hover:bg-[#3f3fdd]'}`}>
                  {size}
                </button>
              ))} */}
          </div>{" "}
          size
        </div>

        {/* Recently Viewed */}
        <div className="space-y-2">
          <h3 className="text-[#edeff5] font-semibold">Recently Viewed</h3>
          <div className="space-y-3">
            {/* {recentlyViewed.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[#edeff5] text-sm font-medium truncate">{item.name}</p>
                    <p className="text-[#bfbfc5] text-xs">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))} */}{" "}
            recently viewed
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
