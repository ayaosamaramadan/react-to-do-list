
function Button({children , onclick }) {
  return (
    <button className='mt-8 text-rose-600 dark:text-white hover:bg-stone-300 hover:text-black dark:hover:bg-blue-600  px-4 py-2 text-xs md:text-base rounded-2xl dark:border-sky-900 border-rose-600 border-2' onClick={onclick}>
  {children}
</button>
  )
}

export default Button
