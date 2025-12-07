"use client";

import { FaVolumeUp } from 'react-icons/fa';

type Phrase = {
  thai: string;
  english: string;
  pronunciation: string;
  gender?: 'male' | 'female' | 'neutral';
};

type Category = {
  id: string;
  name: string;
  phrases: Phrase[];
};

export default function LanguagePage() {
  const categories: Category[] = [
    {
      id: 'greetings',
      name: 'Greetings',
      phrases: [
        { thai: 'สวัสดีครับ', english: 'Hello (male speaker)', pronunciation: 'sawat dee krap', gender: 'male' },
        { thai: 'สวัสดีค่ะ', english: 'Hello (female speaker)', pronunciation: 'sawat dee kha', gender: 'female' },
        { thai: 'สวัสดี', english: 'Hello', pronunciation: 'sawat dee', gender: 'neutral' },
      ],
    },
    {
      id: 'gratitude',
      name: 'Gratitude',
      phrases: [
        { thai: 'ขอบคุณครับ', english: 'Thank you (male)', pronunciation: 'kop koon krap', gender: 'male' },
        { thai: 'ขอบคุณค่ะ', english: 'Thank you (female)', pronunciation: 'kop koon kha', gender: 'female' },
        { thai: 'ขอบใจ', english: 'Thanks (casual)', pronunciation: 'kop jai', gender: 'neutral' },
      ],
    },
    {
      id: 'farewell',
      name: 'Farewell',
      phrases: [
        { thai: 'ลาก่อนครับ/ค่ะ', english: 'Goodbye', pronunciation: 'laa gon krap/kha' },
        { thai: 'พบกันใหม่', english: 'See you again', pronunciation: 'pob gan mai' },
      ],
    },
    {
      id: 'shopping',
      name: 'Shopping',
      phrases: [
        { thai: 'เท่าไหร่ครับ/คะ', english: 'How much is this?', pronunciation: 'tao rai krap/ka' },
        { thai: 'ลดหน่อยได้ไหม', english: 'Can you lower the price?', pronunciation: 'lot noi dai mai' },
        { thai: 'มีอันอื่นไหม', english: 'Do you have other colors/sizes?', pronunciation: 'mee an eun mai' },
        { thai: 'แพงจัง', english: 'Too expensive', pronunciation: 'paeng jung' },
        { thai: 'ซื้อ', english: 'I\'ll take it', pronunciation: 'seu' },
      ],
    },
    {
      id: 'directions',
      name: 'Directions',
      phrases: [
        { thai: 'ไป...อย่างไรครับ/คะ', english: 'How to go to...?', pronunciation: 'pai yang rai krap/ka' },
        { thai: 'ใกล้หรือไกล', english: 'Is it near or far?', pronunciation: 'glai reu glai' },
        { thai: 'เลี้ยวซ้าย/ขวา', english: 'Turn left/right', pronunciation: 'liao sai/kwaa' },
        { thai: 'ตรงไป', english: 'Go straight', pronunciation: 'trong pai' },
        { thai: 'อยู่ที่ไหน', english: 'Where is it?', pronunciation: 'yoo tee nai' },
      ],
    },
    {
      id: 'food',
      name: 'Food & Drinks',
      phrases: [
        { thai: 'ข้าวผัด', english: 'Fried rice', pronunciation: 'kao pad' },
        { thai: 'ต้มยำกุ้ง', english: 'Spicy shrimp soup', pronunciation: 'tom yum kung' },
        { thai: 'ไม่เผ็ด', english: 'Not spicy', pronunciation: 'mai phet' },
        { thai: 'น้ำเปล่า', english: 'Drinking water', pronunciation: 'nam plao' },
        { thai: 'เช็คบิล', english: 'Check, please', pronunciation: 'check bin' },
      ],
    },
  ];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Thai Language Guide</h1>
      <p className="text-gray-600 mb-8">Learn essential Thai phrases for your travels with proper pronunciation.</p>
      
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">{category.name}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.phrases.map((phrase, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xl font-medium text-gray-900">{phrase.thai}</p>
                      <p className="text-gray-600">{phrase.english}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-500">{phrase.pronunciation}</span>
                        {phrase.gender && (
                          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                            {phrase.gender}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => speak(phrase.thai)}
                      className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="Listen to pronunciation"
                      title="Listen to pronunciation"
                    >
                      <FaVolumeUp className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}