// app/culture/page.tsx
export default function CulturePage() {
    const culturalAspects = [
      { title: 'Wai Greeting', description: 'Traditional Thai greeting with palms together' },
      { title: 'Temple Etiquette', description: 'Dress modestly and remove shoes' },
      { title: 'Respect for Monarchy', description: 'Show respect to the royal family' },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thai Culture</h1>
        <p className="mt-4 text-gray-600">
          Learn about Thai customs, traditions, and etiquette.
        </p>
        <div className="mt-8">
          <div className="space-y-4">
            {culturalAspects.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }