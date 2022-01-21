import React, { useEffect, useReducer, useState } from "react";

const DataFetchOne = () => {
    // const [loading, setLoading] = useState(true);
    // const [post, setPost] = useState();
    // const [error, setError] = useState("");

  let initialState = {
    loading: true,
    post: {},
    error: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
        break;
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: "SOMETHING IS WRONG!",
        };
        break;
      default:
        break;
    }
  };

  const [postObj, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const result = async () =>
      await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((result) => {
          return result.json();
        })
        .then((response) => {
          dispatch({ type: "FETCH_SUCCESS", payload: response.title });
            console.log(response)
            // setPost(response.title);
            // setLoading(false);
            // setError("");
        })
        .catch((error) => {
          console.log("error")
          dispatch({ type: "FETCH_ERROR" });
            // setPost("");
            // setLoading(false);
            // setError("Something went wrong!!!");
        });

    result();
  },[postObj.post]);

  return (
    <div>
      {postObj.loading
        ? "Loading..."
        : Object.entries(postObj.post).length === 0
        ? null
        : postObj.post}
      <div>{postObj.error && postObj.error}</div>
      {/* {loading
        ? "Loading..."
        : post}
      <div>{error && error}</div> */}
    </div>
  );
};

export default DataFetchOne;
