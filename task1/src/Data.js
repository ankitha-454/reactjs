import axios from "axios";
import React, { useEffect, useState } from "react";

function Data() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setContent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);
  return (
    <div className="bg-pink-300 flex flex-col gap-2 justify-center items-center">
      {content.map((item) => (
        <h1 className="bg-black text-white w-48" key={item}>{item.name}</h1>
      ))}
    </div>
  );
}

export default Data;
