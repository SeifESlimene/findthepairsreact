import React from "react";
import { Row, Col } from "antd";
import Singlecard from "./Singlecard";


function randomPic() {
  let tabIds = [];
  for (let i = 20; i <= 29; i++) {
    let url = `https://picsum.photos/id/${i}/200`;
    tabIds.push(url);
  }
  return tabIds;
}

const random = randomPic()
  .concat(randomPic())
  .sort(() => Math.random() - 0.5);

let matrix = [];

for (let i = 0; i <= random.length; i += 5) {
  matrix.push(random.slice(i, i + 5));
}


function Cardlist() {
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
