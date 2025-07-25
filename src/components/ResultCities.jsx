// ResultList.js
import React, { useRef } from "react";

const ResultList = ({ cities, setResult }) => {
  const listRef = useRef(null);

  // Basic keyboard navigation (up/down/enter)
  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowDown") {
      const next = listRef.current?.children[idx + 1];
      if (next) next.querySelector("button").focus();
    } else if (e.key === "ArrowUp") {
      const prev = listRef.current?.children[idx - 1];
      if (prev) prev.querySelector("button").focus();
    } else if (e.key === "Enter") {
      setResult(cities[idx]);
    }
  };

  return (
    <div className="absolute ml-28 mt-0.5 w-full rounded-3xl border border-t-0 border-gray-300 bg-gray-100 px-2 py-2" role="listbox" aria-label="City search results" ref={listRef}>
      {cities.length > 0 ? (
        cities.map((result, index) => (
          <div
            key={index}
            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            onMouseDown={(e) => e.preventDefault()}
            role="option"
            aria-selected="false"
          >
            <button
              onClick={() => setResult(result)}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {result.name},{result.country}
            </button>
          </div>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">No results found</div>
      )}
    </div>
  );
};

export default ResultList;
