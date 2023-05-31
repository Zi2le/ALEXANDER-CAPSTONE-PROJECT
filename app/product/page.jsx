import React from 'react'
import Firstblog from '../firstblog/page'
import Secondblog from '../secondblog/page'
import Ash from '../ash'
const product = () => {
  return (
    <section>
      <section> 
        <Ash>
       <Firstblog/>
       </Ash>
      </section>
      <section>
        <Ash>
        <Secondblog/>
        </Ash>
      </section>
      </section>
  )
}

export default product