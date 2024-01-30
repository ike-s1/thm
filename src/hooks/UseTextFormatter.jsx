import React from "react";

const useTextFormatter = (text) => {
  // Use regular expression to detect full strings enclosed within asterisks
  const formattedText = text.split(/\*([^*]+)\*/).map((part, index) => {
    if (index % 2 === 0) {
      // Normal text
      return part;
    } else {
      // Bold text
      return <span key={index} className="bold-text">{part}</span>;
    }
  });

  return formattedText;
};

export default useTextFormatter;
