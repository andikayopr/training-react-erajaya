import React from 'react'
import Text from '../atoms/Text'

export default function ButtonOk({children}) {
  return (
    <Button>
        <Text>{children}</Text>
    </Button>
  )
}
