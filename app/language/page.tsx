"use client";

import { FaVolumeUp } from 'react-icons/fa';
import phrasesData from './phrases.json';

type Phrase = {
  english: string;
  pronunciation: string;
};

type Category = {
  id: string;
  name: string;
  phrases: Phrase[];
};

export default function LanguagePage() {
  const categories: Category[] = phrasesData.categories;

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser");
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
                      <p className="text-xl font-medium text-gray-900">{phrase.english}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-500">{phrase.pronunciation}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => speak(phrase.pronunciation)}
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