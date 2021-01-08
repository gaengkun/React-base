import React, { useReducer, useEffect, useState } from "react";

import { useAsync } from "../custom-hook-base/custom-hook-async";

import axios from "axios";
let commonDiff = 200;
let timer: number;

const initial: ScrollState = {
  page: 1,
};

const reducer = (state: ScrollState, action: ScrollAction) => {
  switch (action.type) {
    case "PAGE":
      return {
        ...state,
        page: state.page++,
      };
    case "INIT":
      return {
        ...initial,
      };
  }
};

async function getPosts(page: number) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${page}`);

  return response.data;
}

function ScrollComponent() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [result, refetch] = useAsync(() => getPosts(state.page), [state.page]);
  const totalPage = 10;

  useEffect(() => {
    let didFetch = false;
    const scrollEv = () => {
      timer = setTimeout(() => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (didFetch === false && result.loading === false) {
          if (docHeight - commonDiff < windowBottom) {
            if (totalPage > state.page) {
              dispatch({
                type: "PAGE",
              });
            }
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", scrollEv);

    return () => {
      window.addEventListener("scroll", scrollEv);
      if (timer) {
        clearTimeout(timer);
      }

      didFetch = true;
    };
  }, [state, result]);

  if (result.error)
    return (
      <div>
        error
        <button onClick={refetch}>reFetch</button>
      </div>
    );

  return (
    <div>
      <h4>ScrollComponent</h4>
      <ul>
        {result.data instanceof Array &&
          result.data.map((v: any, idx: number) => {
            return (
              <li key={idx}>
                <p>{v.title}</p>
                <span>{v.body}</span>
              </li>
            );
          })}
      </ul>
      {result.loading === true && <h1>Loading ...</h1>}
    </div>
  );
}

export default ScrollComponent;
