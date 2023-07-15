import React, { useRef, useState } from 'react'

interface IProps {
  children?: React.ReactNode
  emoij: (string | number)[]
}
const Emoij: React.FC<IProps> = ({ emoij }) => {
  const emoijRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState<boolean>(false)
  function handleCopy() {
    setCopied(true)
    if (!navigator.clipboard)
      return
    navigator.clipboard.writeText(emoijRef.current!.innerText).then(() => {
      setTimeout(() => setCopied(false), 300)
    }, () => {
      throw new Error('copied failed!')
    })
  }
  return <div onClick={handleCopy} ref={emoijRef} className='relative flex flex-col text-3xl text-center'>
    {String.fromCodePoint(...emoij as number[])}
    {copied ? <span className='absolute -bottom-4 text-sm'>loading</span> : null}
  </div>
}
export default Emoij
