import { FaHome, FaMapMarkedAlt, FaLanguage, FaBriefcaseMedical, FaUtensils, FaLandmark } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <FaHome className="w-8 h-8 text-indigo-600" />,
      title: 'Accommodation',
      description: 'Find the best places to stay across Thailand',
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8 text-indigo-600" />,
      title: 'Destinations',
      description: 'Discover must-visit locations and hidden gems',
    },
    {
      icon: <FaLanguage className="w-8 h-8 text-indigo-600" />,
      title: 'Language Guide',
      description: 'Essential Thai phrases for travelers',
    },
    {
      icon: <FaBriefcaseMedical className="w-8 h-8 text-indigo-600" />,
      title: 'Health & Safety',
      description: 'Important health information and travel tips',
    },
    {
      icon: <FaUtensils className="w-8 h-8 text-indigo-600" />,
      title: 'Local Cuisine',
      description: 'Explore authentic Thai food and where to find it',
    },
    {
      icon: <FaLandmark className="w-8 h-8 text-indigo-600" />,
      title: 'Culture',
      description: 'Learn about Thai traditions and customs',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white rounded-lg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to ThailandBaba
            </h1>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              Your ultimate guide to exploring the Land of Smiles. Discover hidden gems, local secrets, and everything in between.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/guide"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                Explore Thailand
              </a>
              <a
                href="/tips"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Travel Tips
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything You Need for Your Thai Adventure
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            From bustling cities to serene beaches, we've got you covered.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to explore Thailand?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Start planning your dream vacation with our comprehensive guides and travel tips.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/destinations"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Browse Destinations
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}