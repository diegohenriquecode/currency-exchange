interface CellProps {
  title: string;
  value: string;
}
export function Cell({title, value}: CellProps) {
  if(title.toLowerCase() === 'close diff (%)') {
    let color = ' text-[#69C669]';
    if(value.includes('-')) {
      color = ' text-[#E54E4E]'
    }

    return (
      <span className='mt-2 flex'>
        <span
          className='text-[11px]'
        >
          {title.toUpperCase()}:
           <span className={'text-[16px] font-[500]' + color}
            >
            {` ` + value}
           </span>
        </span>


        <img
          className='ml-2'
          src={
            value.includes('-')
            ? "/assets/down.svg"
            : "/assets/up.svg"
        }
          alt=""
        />
    </span>
    )
  }

  return (
    <span className='text-[11px]'>
        {title.toUpperCase()}: <span className='text-[16px] font-[500]'>R$ {value}</span>
    </span>
  )
}