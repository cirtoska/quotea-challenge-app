import { Link } from "react-router-dom";
import { Quote } from "../../types";
import "./style.css";
import { TiArrowBack } from "react-icons/ti";

const QuoteCard = ({
  quote,
  generateQuote,
}: {
  quote: Quote;
  generateQuote: () => void;
}) => {
  console.log(quote);
  return (
    <section className="quote-card">
      <blockquote key={quote.Id}>
        <div className="return">
          <Link to="/quotes">
            <TiArrowBack />
            back
          </Link>
        </div>
        <h2 className="text-quote">{quote.Text}</h2>
        <h3 className="quote-author">{quote.Author}</h3>
        <button className="btn" onClick={generateQuote}>
          New Quote
        </button>
      </blockquote>
    </section>
  );
};

export default QuoteCard;
