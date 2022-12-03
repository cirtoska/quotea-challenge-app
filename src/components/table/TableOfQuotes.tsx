import { useEffect, useState } from "react";
import Gender from "../gender/Gender";
import { Quote } from "../../utility/model";
import "./style.css";

const TableOfQuotes = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://dummyjson.com/quotes", {
        method: "GET",
      });
      const jsonData = await data.json();
      setQuote(jsonData.quotes);
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
                <td>
                  <Gender author={item.author} id={0} quote={""} gender={""} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableOfQuotes;
