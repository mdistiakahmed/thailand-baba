// app/cuisine/page.tsx
export default function CuisinePage() {
    const popularDishes = [
      { name: 'Pad Thai', description: 'Stir-fried rice noodle dish' },
      { name: 'Tom Yum Goong', description: 'Spicy shrimp soup' },
      { name: 'Som Tum', description: 'Spicy green papaya salad' },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thai Cuisine</h1>
        <p className="mt-4 text-gray-600">
          Discover the rich flavors of authentic Thai food.
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">{dish.name}</h2>
                <p className="mt-2 text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }