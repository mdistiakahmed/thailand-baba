import type { Metadata } from 'next';
import PhraseCard from './PhraseCard';

type Phrase = {
  english: string;
  pronunciation: string;
};

type Category = {
  id: string;
  name: string;
  phrases: Phrase[];
};

export const metadata: Metadata = {
  title: 'Essential Thai Phrases | Learn Thai for Travel & Daily Use',
  description: 'Master essential Thai phrases with English translations and pronunciation guides. Perfect for travelers and language learners. Start speaking Thai today!',
  openGraph: {
    title: 'Essential Thai Phrases | Learn Thai for Travel & Daily Use',
    description: 'Master essential Thai phrases with English translations and pronunciation guides. Perfect for travelers and language learners.',
    url: 'https://www.thailandbaba.com/language',
    siteName: 'Thailand Baba',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.thailandbaba.com/thai-language-og.jpg', 
        width: 1200,
        height: 630,
        alt: 'Learn Thai Phrases',
      },
    ],
  },
};

export default async function LanguagePage() {
  const phrasesData = await import('./phrases.json');
  const categories: Category[] = phrasesData.categories;

  return (
    <div className="min-h-screen bg-gray-50">
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Essential Thai Phrases for Travelers
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Master the most useful Thai phrases for travel, dining, and daily conversations. 
          Click the 🔊 icon to hear the pronunciation of each phrase.
        </p>
      </div>

      <div className="mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🇹🇭</span> Thai Language Tip
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In Thai, politeness is shown by adding particles at the end of sentences. 
            Men typically end sentences with <span className="font-semibold text-amber-700">&quot;Khrap&quot; (ครับ)</span> 
            while women use <span className="font-semibold text-amber-700">&quot;Kha&quot; (ค่ะ/คะ)</span>. 
            These particles are similar to saying &quot;sir&quot; or &quot;ma&apos;am&quot; in English and make your speech more polite. 
            For example, &quot;Sawatdee&quot; (hello) becomes <span className="font-medium">&quot;Sawatdee khrap&quot;</span> (for men) 
            or <span className="font-medium">&quot;Sawatdee kha&quot;</span> (for women).
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.id} className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-10 w-1.5 bg-amber-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {category.name}
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.phrases.map((phrase, index) => (
                <PhraseCard key={index} phrase={phrase} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  </div>
  );
}