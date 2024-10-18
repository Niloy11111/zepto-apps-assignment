import { useEffect, useState } from "react";

export const useTopWords = (allTopics, loading) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const cleanedValues = allTopics?.map((value) =>
      value.replace(/[\(\)--.:&]/g, "")
    );

    const excludedWords = [
      "browsing",
      "women",
      "best",
      "from",
      "listing",
      "books",
      "ever",
      "and",
      "to",
      "early",
      "africans",
      "african",
      "american",
      "long",
      "first",
    ];

    const wordCounts = cleanedValues?.reduce((counts, value) => {
      value
        .toLowerCase()
        .split(/\s+/)
        .forEach((word) => {
          if (
            !excludedWords.includes(word) &&
            word.length >= 4 &&
            1 &&
            /^[a-zA-Z]+$/.test(word)
          ) {
            if (!counts[word]) {
              counts[word] = 1;
            } else {
              counts[word] += 1;
            }
          }
        });
      return counts;
    }, {});

    if (wordCounts) {
      const sortedWords = Object.entries(wordCounts).sort(
        (a, b) => b[1] - a[1]
      );

      const topWords = sortedWords?.slice(0, 5).map(([word]) => word);
      setTopics(topWords);
    }
  }, [loading]);
  return { topics };
};
