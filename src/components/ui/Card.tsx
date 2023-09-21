import {Cell} from "./Cell";
import {DailyExchangedType} from "../../pages/Home";

export function Card({open, low, high, close, date, diff}: DailyExchangedType) {
  console.log("DIFF: ", diff)
  function formataData(date: string) {
    let data = new Date(date),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

    return (
    <div className="cursor-pointer block h-[141px] max-w-sm p-4 bg-white border border-gray-200  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className='text-sm text-[#07B0FB] font-[500]'>{formataData(date)}</p>

     <div className="grid grid-cols-2 grid-rows-2 gap-y-2.5 mt-2">
      <Cell title={'open'} value={String(open)} />
      <Cell title={'hight'} value={String(high)} />
      <Cell title={'close'} value={String(close)} />
      <Cell title={'low'} value={String(low)} />
     </div>

      <Cell title={'close diff (%)'} value={String(diff).slice(0, 10)} />

    </div>
  )
}