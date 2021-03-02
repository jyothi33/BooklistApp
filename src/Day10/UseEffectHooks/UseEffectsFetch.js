import React, { useState, useEffect } from "react";

function UseEffectsFetch() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const result = async () =>
      await fetch(`https://type.fit/api/quotes`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          let randomeQuote = res[Math.floor(Math.random() * res.length)];
          setQuote(randomeQuote.text);
          setAuthor(randomeQuote.author);
        })
        .catch((err) => {
          console.log(err);
        });
    result();
  }, []);

  const result1 = async () => {
    await fetch(``)
      .then((res) => {
        return res.json();
      })
      .then((result) => {});
  };
  result1();

  return (
    <div>
      <h1>{quote}</h1>
      <h3>{author && "-" + author}</h3>
    </div>
  );
}

export default UseEffectsFetch;
