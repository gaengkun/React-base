import React, { useState } from "react";
import { useAsync } from "./custom-hook-async";
import axios from "axios";

async function getPosts(page: number) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${page}`
  );
  return response.data;
}

function CustomHookTestComponent() {
  const [page, setPage] = useState<number>(1);
  const [state, refetch] = useAsync(() => getPosts(page), [page]);
  const { loading, data: posts, error } = state;

  if (loading) return <h4>loading .... </h4>;
  if (error) return <h4>Error! </h4>;
  if (!posts) return <button onClick={refetch}>불러오기</button>;

  return (
    <div>
      <ul>
        {posts.map((v: any, idx: number) => {
          return (
            <div key={idx}>
              <h4>{v.title}</h4>
              <p>{v.body}</p>
              <div className="tit"></div>
            </div>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        PAGE + 1
      </button>
      <button onClick={refetch}>REFETCH</button>
    </div>
  );
}

export default CustomHookTestComponent;
