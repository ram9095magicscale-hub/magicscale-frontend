import React from "react";
import { CheckCircle } from "lucide-react"; // Assuming 'lucide-react' is installed for CheckCircle
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
          className="text-blue-600 underline font-medium" // Will be updated conditionally
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
        <a href="#" className="text-blue-600 underline font-medium"> {/* Will be updated conditionally */}
          Refer here
        </a>
      </>
    ),
  },
];

// Accept isDarkMode as a prop
const DocumentsRequired = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      // Main section background
      className={`py-12 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div
        // Inner content box background and shadow
        className={`max-w-5xl mx-auto shadow-md rounded-xl p-8 ${
          isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        <h2
          // Heading text color
          className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-purple-400' : 'text-gray-800'
          }`}
        >
          Documents Required
        </h2>
        <p
          // Paragraph text color
          className={`mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Keep the following documents ready to get started quickly and ensure a smooth registration process.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              // Individual document item background and shadow
              className={`flex items-start p-4 rounded-lg shadow-sm ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}
            >
              <CheckCircle
                // Checkmark icon color
                className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} mt-1 mr-3`}
                size={24}
              />
              <div>
                <h4
                  // Document title text color
                  className={`text-lg font-semibold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                >
                  {doc.title}
                </h4>
                <p
                  // Document description text color
                  className={`text-sm mt-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {/* Conditional rendering for description to handle links */}
                  {typeof doc.description === 'string' ? (
                    doc.description
                  ) : (
                    <>
                      {doc.description.props.children[0]} {/* Text part */}
                      <a
                        href={doc.description.props.children[2].props.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline font-medium ${
                          isDarkMode ? 'text-purple-300 hover:text-purple-400' : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        {doc.description.props.children[2].props.children} {/* Link text */}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;