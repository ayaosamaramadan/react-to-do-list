
function Button({children}) {
  return (
    <button className='mt-8 text-rose-600 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 text-xs md:text-base rounded-2xl border-rose-600 border-2'>
  {children}
</button>
  )
}

export default Button