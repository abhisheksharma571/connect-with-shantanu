import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Define the type for the FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the FAQ item open/close
  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // The array of questions and answers
  const questions: FAQItem[] = [
    {
      question: "What services do you offer as a consultant?",
      answer:
        "As a consultant, I offer a range of services, including business strategy development, digital transformation, process optimization, and leadership coaching to help businesses grow and adapt to changing markets.",
    },
    {
      question: "How do you tailor solutions for different clients?",
      answer:
        "Each client is unique, so I start by understanding your specific business challenges and goals. I conduct thorough analysis and collaborate with you to design customized strategies that align with your vision.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "I specialize in industries such as technology, healthcare, finance, and retail. My diverse experience allows me to adapt strategies that best fit the nuances of each sector.",
    },
    {
      question: "How long does it take to see results from consulting services?",
      answer:
        "The timeline for results varies depending on the project and goals. However, most clients start seeing positive changes within 3 to 6 months, with sustainable long-term growth following that.",
    },
    {
      question: "What is your process for working with new clients?",
      answer:
        "I begin by holding an initial consultation to understand your needs and assess the current state of your business. Afterward, I provide a detailed proposal with a tailored plan of action, and we move forward from there.",
    },
  ];

  return (
    <section className="text-black bg-background md:px-8 pb-5">
      <h1 className="text-2xl md:text-4xl underline font-bold text-center mb-5 text-[#19a99d]">FAQ's</h1>

      <div className="max-w-3xl mx-auto space-y-1">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-orange">
            <button
              className="w-full bg-background flex justify-between items-center py-4 px-3 text-lg md:text-xl text-start font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`${
                  openIndex === index ? 'text-[#19a99d]' : 'text-black'
                } hover:text-[#19a99d]`}
              >
                {item.question}
              </span>
              <FontAwesomeIcon
                icon={openIndex === index ? faMinus : faPlus}
                className="transition-transform duration-300"
              />
            </button>
            <p
              className={`text-lg transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
