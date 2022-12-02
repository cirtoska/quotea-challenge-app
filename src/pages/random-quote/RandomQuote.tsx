import { useState } from "react";
import Header from "../../components/header/Header";
import QuoteCard from "../../components/quote-card/QuoteCard";
import { Quote } from "../../types";
import "./style.css";

const url = "https://api.quotable.io/random";

const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote>({
    Id: "#",
    Text: "Press New Quote to generate...",
    Author: "Press New Quote...",
  });

  const generateQuote = async () => {
    setQuote({
      Id: "#",
      Text: "Fetch data...",
      Author: "Fetching data...",
    });

    type Response = {
      _id: string;
      content: string;
      author: string;
    };
    try {
      const response: Response = await fetch(url).then((response) =>
        response.json()
      );
      setQuote({
        Id: response._id,
        Text: response.content,
        Author: response.author,
      });
    } catch {
      setQuote({
        Id: "#",
        Text: "Could not fetch quote. Try again.",
        Author: "Press new quote",
      });
    }
  };

  return (
    <>
      <Header />
      <section id="random-quote">
        <QuoteCard quote={quote} generateQuote={generateQuote} />
      </section>
    </>
  );
};

export default RandomQuote;
