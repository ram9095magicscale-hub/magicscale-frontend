import React from "react";
import { CheckCircle } from "lucide-react";
import { useTheme } from "../../../components/context/ThemeContext";

const documents = [
  {
    title: "PAN Card",
    description: "Required for tax and verification purposes.",
  },
  {
    title: "FSSAI License",
    description: (
      <>
        Mandatory for food safety compliance.{" "}
        <a
          href="https://magicscale.in/services/fssai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-medium"
        >
          Apply here
        </a>
      </>
    ),
  },
  {
    title: "Bank Account Details",
    description: "Used to deposit your payouts securely.",
  },
  {
    title: "GST Number (if applicable)",
    description: "Needed for invoicing and tax compliance.",
  },
  {
    title: "Menu & Profile Food Image",
    description: (
      <>
        Showcase your best dishes to attract customers.{" "}
        <a href="#" className="text-blue-600 underline font-medium">
          Refer here
        </a>
      </>
    ),
  },
];

const DocumentsRequired = () => {
  const { isDarkMode } = useTheme();
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-5xl mx-auto shadow-md rounded-xl p-8 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-orange-500' : 'text-gray-800'
        }`}>
          Documents Required
        </h2>
        <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Keep the following documents ready to get started quickly and ensure a smooth registration process.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={`flex items-start p-4 rounded-lg shadow-sm transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <CheckCircle className="text-green-600 mt-1 mr-3" size={24} />
              <div>
                <h4 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {doc.title}
                </h4>
                <div className="text-sm mt-1">
                  {typeof doc.description === 'string' ? (
                    doc.description
                  ) : (
                    <>
                      {doc.description.props.children[0]}
                      <a
                        href={doc.description.props.children[2].props.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline font-medium ${
                          isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        {doc.description.props.children[2].props.children}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
