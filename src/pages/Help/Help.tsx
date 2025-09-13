import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export const Help = () => {
  return (
    <div className="bg-white dark:bg-[#1D202B] rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200 dark:border-stone-700">
        <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800 dark:text-stone-200">
          <QuestionMarkCircleIcon className="w-6 text-stone-600 dark:text-stone-200" />
          <span>Help & FAQs</span>
        </h3>
      </div>

      <div className="p-6 space-y-4">
        <FaqItem
          question="What is CapitalEdge?"
          answer="CapitalEdge is a finance admin dashboard designed to manage transactions, users, and business insights efficiently."
        />
        <FaqItem
          question="How do I manage my transactions?"
          answer="You can view and track all transactions from the 'Transactions' section in the sidebar."
        />
        <FaqItem
          question="Can I invite team members?"
          answer="Yes, you can manage and invite team members from the 'Users' section."
        />
        <FaqItem
          question="How do I update my account settings?"
          answer="Go to 'Settings' in the sidebar to update your account, preferences, and security options."
        />
        <FaqItem
          question="Who do I contact for support?"
          answer="For any assistance, reach out to the support team via the contact option inside this Help page."
        />
      </div>
    </div>
  );
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4 hover:bg-stone-50 dark:hover:bg-[#292D32] transition-colors">
      <h4 className="font-semibold text-stone-800 dark:text-stone-200">
        {question}
      </h4>
      <p className="text-stone-600 dark:text-stone-300 text-sm mt-1">
        {answer}
      </p>
    </div>
  );
};
