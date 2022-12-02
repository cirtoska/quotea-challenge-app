import { useEffect, useState } from "react";

import "./style.css";

type quoteProps = {
  id: number;
  quote: string;
  author: string;
};

const TableOfQuotes = () => {
  const [quote, setQuote] = useState<quoteProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://dummyjson.com/quotes", {
        method: "GET",
      });
      const jsonData = await data.json();
      setQuote(jsonData.quotes);
      // {
      //   quote.map((item) => {
      //     const firstName = `${item.author}`.split(" ")[0];

      //     return console.log(firstName);
      //   });
      // }
    };
    api();
  }, []);

  return (
    <section id="list">
      <table>
        <thead>
          <tr>
            <th className="separator">id</th>
            <th className="separator">Quote</th>
            <th className="separator">Author</th>
            <th className="gender">Gender</th>
          </tr>
        </thead>
        <tbody>
          {quote?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="quote-id">{item.id}</td>
                <td className="quote">{item.quote}</td>
                <td>{item.author}</td>
                <td>Gender no.1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableOfQuotes;
