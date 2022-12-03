import { useState, useEffect } from "react";
import { Quote } from "../../utility/model";
import "./style.css";

const Gender = ({ author }: Quote) => {
  const [gender, setGender] = useState<string>("");

  const firstName = `${author}`.split(" ")[0];

  const url = `https://v2.namsor.com/NamSorAPIv2/api2/json/gender/${firstName}`;

  // const url = `https://api.genderize.io?name=${firstName}`; // I was getting 429 status code for too many requests, that's why I found another API for getting the genders

  const fetchGender = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": "53008db57073122003d7de5d3ee7971c",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      // console.log(data.gender);

      setGender(data.likelyGender);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("gender", gender);
  const male = (
    <span className="emoji" role="img" aria-label="person">
      🧑
    </span>
  );
  const female = (
    <span className="emoji" role="img" aria-label="woman">
      👩
    </span>
  );

  useEffect(() => {
    fetchGender();
  }, [gender]);

  return <div className="gender">{gender === "male" ? male : female}</div>;
};

export default Gender;
