// app/language/page.tsx
export default function LanguagePage() {
    const commonPhrases = [
      { thai: 'สวัสดี', english: 'Hello', pronunciation: 'sà-wàt-dee' },
      { thai: 'ขอบคุณ', english: 'Thank you', pronunciation: 'kòp-khun' },
      { thai: 'ลาก่อน', english: 'Goodbye', pronunciation: 'laa gòn' },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thai Language Guide</h1>
        <p className="mt-4 text-gray-600">
          Learn essential Thai phrases for your travels.
        </p>
        <div className="mt-8">
          <div className="space-y-4">
            {commonPhrases.map((phrase, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-medium text-gray-900">{phrase.thai}</p>
                    <p className="text-gray-600">{phrase.english}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{phrase.pronunciation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }