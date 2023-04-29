import React from 'react'
import Firstabout from '../firstabout/page'
import Secondabout from '../secondabout/page'
import Thirdabout from '../thirdabout/page'
const about = () => {
  return (
    <div>
        <section>
        <Firstabout/>
        </section>
        <section>
      <Secondabout/>
        </section>
        <section>
         <Thirdabout/>
        </section>
    </div>

  )
}

export default about