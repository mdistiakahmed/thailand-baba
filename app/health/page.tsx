// app/health/page.tsx
export default function HealthPage() {
    const healthTips = [
      'Drink plenty of bottled water',
      'Use mosquito repellent',
      'Be cautious with street food',
      'Carry necessary medications',
      'Know emergency numbers',
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Health & Safety</h1>
        <p className="mt-4 text-gray-600">
          Important health information and safety tips for your trip to Thailand.
        </p>
        <div className="mt-8 space-y-4">
          {healthTips.map((tip, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }