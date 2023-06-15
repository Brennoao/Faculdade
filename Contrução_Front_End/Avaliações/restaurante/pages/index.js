import React from 'react'
import Align from '../components/Align'
import Header from '../components/Header'
import { VictoryPie } from 'victory';
import Style from '../styles/Style.module.css'

const index = () => {

  return (
    <>
      <Header />
      <div className={Style.Flex}>
        <div className={Style.Pi}>
          <VictoryPie 
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            startAngle={90}
            endAngle={450}
            events={[{
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: ({ style }) => {
                        return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                      }
                    }, {
                      target: "labels",
                      mutation: ({ text }) => {
                        return text === "clicked" ? null : { text: "clicked" };
                      }
                    }
                  ];
                }
              }
            }]}
            data={[
              { x: 1, y: 1, label: "one" },
              { x: 2, y: 2, label: "two" },
              { x: 3, y: 3, label: "three" },
              { x: 3, y: 3, label: "three" },
              { x: 3, y: 3, label: "three" },
              { x: 3, y: 3, label: "three" },
              { x: 3, y: 3, label: "three" },
              { x: 4, y: 4, label: "quatro" }
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default index