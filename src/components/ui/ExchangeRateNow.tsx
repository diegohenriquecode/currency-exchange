import {useState} from "react";
import {Card} from "./Card";

interface ExchangeRateNowProps {
  currency?: string;
}

export function ExchangeRateNow({currency}: ExchangeRateNowProps) {
  const [showList, setShowList] = useState<boolean>(false);
  const moneyFormatted = 5.00;
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hour}h${minute}`;

  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold text-md'>Exchange rate now</p>
          <p>{
            currentDate + ' - ' + formattedTime
          }</p>
        </div>
        <p className='text-[#07B0FB] font-bold text-xl'>
          {currency ?? 'Currency'}/BRL
        </p>
      </div>

      <div className='mt-10 bg-[#07B0FB]/25 h-20'>
        <p className='text-center mt-4 text-[#07B0FB] font-bold text-4xl'>
          R$ {moneyFormatted}
        </p>
      </div>

      <div className='flex justify-between items-center'>
        <span className='mt-2.5 font-bold'> LAST 30 DAYS </span>
        <span
          onClick={() => setShowList(!showList)}
          className='text-4xl text-[#07B0FB] cursor-pointer'
        >
          {
            !showList
            ? ' + '
            : ' - '
          }
        </span>
      </div>

      {
        !showList && (
          <hr
            className="my-4 h-0.5 border-t-0 bg-[#07B0FB] opacity-100 dark:opacity-50"/>
        )
      }

      {
        showList && (
          <>
            <div className='my-2 max-h-[420px] mt-10 bg-[#F4F4F4] p-2 space-y-4 overflow-y-scroll'>
              <Card />
              <Card />
              <Card />
            </div>

            <hr
              className="mb-4 mt-[-6px] h-0.5 border-t-0 bg-[#07B0FB] opacity-100 dark:opacity-50"/>

          </>
        )
      }
    </>
  )
}