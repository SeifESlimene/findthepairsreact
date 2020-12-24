import React from "react";
import { Row, Col } from "antd";
import Singlecard from "./Singlecard";

// function Fill(length, value) {
//   return Array(length).fill(value);
// }

// function check(id) {
//   return tabIds.push(id);
// }

function randomPic() {
  // console.log("Inside Random Pic");
  let tabIds = [];
  for (let i = 20; i <= 29; i++) {
    let url = `https://picsum.photos/id/${i}/200`;
    tabIds.push(url);
  }
  // check(id);
  // const id = Math.floor(Math.random() * (10 - 0) + 0);
  // const url = `https://picsum.photos/id/${id}/200`;
  return tabIds;
  // return { url, id, tabIds };
  // pairConst();
}

const random = randomPic()
  .concat(randomPic())
  .sort(() => Math.random() - 0.5);

let matrix = [];

for (let i = 0; i <= random.length; i += 5) {
  matrix.push(random.slice(i, i + 5));
}

// matrix = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ];

// random.map((entry, key) => {
//   row.push(entry);
// });

// let row = Fill(5, 0);
// let matrix = Fill(4, row);

// console.log(randomPic().concat(randomPic()));

function Cardlist() {
  // const [urls, setUrls] = useState([]);
  // useEffect(() => {
  //   console.log("I Am Here");
  //   setUrls(
  //     randomPic()
  //       .concat(randomPic())
  //       .sort(() => Math.random() - 0.5)
  //   );
  //   console.log(urls);
  // }, []);
  return (
    <div>
      {matrix.map((row, key) => (
        <Row key={key} gutter={[16, 16]}>
          {row.map((column, key) => {
            return (
              <Col key={key} span={4}>
                <Singlecard url={column} />
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

export default Cardlist;
