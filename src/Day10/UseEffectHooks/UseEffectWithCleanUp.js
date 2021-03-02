import React, { useState, useEffect } from "react";

const UseEffectWithCleanUp = () => {
  const [showPage, setShowPage] = useState(true);
  return (
    <div>
      {showPage && <Page />}
      <button onClick={() => setShowPage(!showPage)}>
        Toggle Page Component
      </button>
    </div>
  );
};

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Mounting Page !!!");
    let unmount = false;
    setTimeout(() => {
      console.log("Data loaded for Page!");
      if (!unmount) {
        setData("Some data loaded from server.......");
      }
    }, 3000);

    return () => {
      console.log("Unmounting Page !!!!");
      unmount = true;
    };
  }, []);

  return <div>Data : {data}</div>;
};

export default UseEffectWithCleanUp;
