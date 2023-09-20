import {Header, Footer, ExchangeRateNow, Form} from "../components/ui/";
import {Card} from "../components/ui/Card";
export function Home() {
  return (
    <>
      <Header />
        <span className='text-[#07B0FB] text-2xl font-bold flex justify-center my-10'>BRL EXCHANGE RATE</span>

        <Form />

      <div className='my-0 mx-auto w-80 flex flex-col'>
        <ExchangeRateNow />
      </div>

      <Footer />
    </>
  )
}