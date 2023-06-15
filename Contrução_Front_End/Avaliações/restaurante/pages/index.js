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
            data={[
              { x: 1, y: 2, label: "one" },
              { x: 2, y: 3, label: "two" },
              { x: 3, y: 5, label: "three" }
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default index