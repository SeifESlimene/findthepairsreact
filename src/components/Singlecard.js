import React, { useState, useEffect, useRef } from "react";
import { Image } from "antd";

let i = 0;
let checkArray = [];
let style = [];

function SingleCard({ url, id }) {
  const [flipped, setFlipped] = useState(true);
  const handleClick = (e) => {
    if (i < 2) {

      i++;
      style.push(e.target.parentElement.style);
      checkArray.push(e.target.dataset.url);
      setFlipped(!flipped);
      if (checkArray.length === 2) {
        if (checkArray[0] === checkArray[1]) {
          style[0].display = "none";
          style[1].display = "none";
          i = 0;
          style = [];
          checkArray = [];
        } else {
          console.log("Not Equal");
          i = 0;
          checkArray = [];
          style = [];
          setTimeout(() => {
            setFlipped(false);
          }, 1000);
        }
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setFlipped(!flipped);
    }, 3000);
  }, []);
  return (
    <>
      <div
        style={{
          height: "80px",
          width: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#fff",
        }}
      >
        {flipped ? (
          <Image height="80" width="80" src={url} preview={false} />
        ) : (
          <span
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            data-url={url}
            onClick={(e) => {
              return handleClick(e);
            }}
          >
            ?
          </span>
        )}
      </div>
    </>
  );
}

export default SingleCard;
