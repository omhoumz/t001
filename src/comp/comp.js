import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'

const Comp = () => {
  return (
    <AutoSizer>
      {() => <span>this is auto sized</span>}
    </AutoSizer>
  )
}

export default Comp
