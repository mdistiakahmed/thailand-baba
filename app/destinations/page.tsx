// app/destinations/page.tsx
export default function DestinationsPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Destinations</h1>
        <p className="mt-4 text-gray-600">
          Explore the most beautiful and exciting destinations across Thailand.
        </p>
        <div className="mt-8">
          {/* Destination cards will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">Bangkok</h2>
              <p className="mt-2 text-gray-600">The vibrant capital city</p>
            </div>
            {/* Add more destination cards */}
          </div>
        </div>
      </div>
    );
  }