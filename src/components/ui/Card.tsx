import {Cell} from "./Cell";

export function Card() {
  return (
    <div className="cursor-pointer block h-[141px] max-w-sm p-4 bg-white border border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className='text-sm text-[#07B0FB] font-[500]'>09/0302922</p>

     <div className="grid grid-cols-2 grid-rows-2 gap-y-2.5 mt-2">
      <Cell title={'open'} value={'5.700'} />
      <Cell title={'hight'} value={'5.879'} />
      <Cell title={'close'} value={'5.128'} />
      <Cell title={'low'} value={'5.028'} />
     </div>

      <Cell title={'close diff (%)'} value={'5.128'} />

    </div>
  )
}