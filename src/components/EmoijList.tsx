import React from 'react'
import Emoij from './Emoij'

interface IProps {
  children?: React.ReactNode
  emoijs: EmoijSets
  searchRes: any
}

type EmoijSets = Record<any, Array<Array<string | number>>>

const EmoijList: React.FC<IProps> = ({ emoijs, searchRes }) => {
  const flag = Reflect.ownKeys(searchRes).length === 0
  console.log(searchRes)
  return (
    <>
      {
        flag
          ? <div className='flex flex-row flex-wrap gap-2'>{
            Object.keys(emoijs).map((key, index) =>
              <div className=' w-1/10 justify-center items-center py-3' title={key} key={index}>
                {emoijs[key].map((i, index) => <Emoij key={index} emoij={i}></Emoij>)}
              </div>,
            )}
          </div>
          : <div className='flex flex-row flex-wrap gap-2'>
            {Object.keys(searchRes).map(key => <div key={searchRes[key].id}>{searchRes[key].code.map((i, index) => <Emoij key={index} emoij={i}></Emoij>)}</div>)}
          </div>
      }

    </>
  )
}

export default EmoijList
