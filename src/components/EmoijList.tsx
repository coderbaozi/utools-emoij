import React from 'react'
import Emoij from './Emoij'

interface IProps {
  children?: React.ReactNode
  emoijs: EmoijSets
}

type EmoijSets = Record<any, Array<Array<string | number>>>

const EmoijList: React.FC<IProps> = ({ emoijs }) => {
  return <div className='flex flex-row flex-wrap gap-2'>{
    Object.keys(emoijs).map((key, index) =>
      <div className=' w-1/10 justify-center items-center py-3' title={key} key={index}>
        {emoijs[key].map((i, index) => <Emoij key={index} emoij={i}></Emoij>)}
      </div>,
    )}
  </div>
}

export default EmoijList
