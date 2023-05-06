import React from 'react'
import Firstabout from '../firstabout/page'
import Secondabout from '../secondabout/page'
import Thirdabout from '../thirdabout/page'
import Fourthabout from '../fourthabout/page'
const about = () => {
  return (
    <section>
        <section>
        <Firstabout/>
        </section>
        <section>
      <Secondabout/>
        </section>
        <section>
         <Thirdabout/>
        </section>
        <section>
          <Fourthabout/>
        </section>
    </section>

  )
}

export default about