"use client"
import { useState } from "react";

const Component: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");

  const handleDigitClick = (digit: string) => {
    if (display === "0") {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setDisplay(display + " " + operator + " ");
  };

  const handleEqualClick = () => {
    try {
      const result = eval(display.trim());
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-6">
          <input
            type="text"
            value={display}
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-2xl font-medium text-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleDigitClick("7")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            7
          </button>
          <button
            onClick={() => handleDigitClick("8")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            8
          </button>
          <button
            onClick={() => handleDigitClick("9")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            9
          </button>
          <button
            onClick={() => handleOperatorClick("/")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            /
          </button>
          <button
            onClick={() => handleDigitClick("4")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            4
          </button>
          <button
            onClick={() => handleDigitClick("5")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            5
          </button>
          <button
            onClick={() => handleDigitClick("6")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            6
          </button>
          <button
            onClick={() => handleOperatorClick("*")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            *
          </button>
          <button
            onClick={() => handleDigitClick("1")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            1
          </button>
          <button
            onClick={() => handleDigitClick("2")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            2
          </button>
          <button
            onClick={() => handleDigitClick("3")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            3
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            -
          </button>
          <button
            onClick={() => handleDigitClick("0")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-lg col-span-2 transition-colors duration-200"
          >
            0
          </button>
          <button
            onClick={() => handleOperatorClick("+")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            +
          </button>
          <button
            onClick={handleEqualClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            =
          </button>
          <button
            onClick={handleClearClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg col-span-2 transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
