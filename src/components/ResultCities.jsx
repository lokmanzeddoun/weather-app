// ResultList.js
import React from "react";

const ResultList = ({ cities, setResult }) => {
  return (
    <div className="absolute ml-28 mt-0.5 w-full rounded-3xl border border-t-0 border-gray-300 bg-gray-100 px-2 py-2">
      {cities.length > 0 ? (
        cities.map((result, index) => (
          <div
            key={index}
            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            onMouseDown={(e) => e.preventDefault()}
          >
            <button onClick={() => setResult(result)}>
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
