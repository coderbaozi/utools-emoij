function useDebounce(fn: Function, delay: number) {
  let timer: NodeJS.Timeout
  return function (...args: any[]) {
    const event = args[0]
    if (timer)
      clearTimeout(timer)
    timer = setTimeout(() => {
      fn(event, args)
    }, delay)
  }
}

export { useDebounce }
