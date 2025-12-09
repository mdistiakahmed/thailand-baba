'use client';

import { FaVolumeUp } from 'react-icons/fa';

type PhraseCardProps = {
  phrase: {
    english: string;
    pronunciation: string;
  };
};

export default function PhraseCard({ phrase }: PhraseCardProps) {
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
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-5 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {phrase.english}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-600 font-medium">
            {phrase.pronunciation}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              speak(phrase.pronunciation);
            }}
            className="p-2.5 rounded-full text-amber-500 hover:text-white hover:bg-amber-500 transition-colors duration-200"
            aria-label="Listen to pronunciation"
            title="Listen to pronunciation"
          >
            <FaVolumeUp className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}