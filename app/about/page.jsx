import React from 'react'
import Firstabout from '../firstabout/page'
import Secondabout from '../secondabout/page'
import Thirdabout from '../thirdabout/page'
import Fourthabout from '../fourthabout/page'
import Ash from '../ash'
const about = () => {
  return (
    <section>
      <Ash>
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
        </Ash>
    </section>

  )
}

export default about