import {api} from '../../axios'
export function Form() {
  async function handleExchangeCurrency() {
    const response = await api.get('currentExchangeRate', {
      params: {
        from_symbol: 'EUR',
      }
    })

    console.log("Response: ", response)
  }

  return (
    <form
      className='flex justify-center items-center w-full flex-col'
      onSubmit={handleExchangeCurrency}
    >
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          type="text"
          className="lg:w-80 h-[56px] peer block min-h-[auto] w-full border-0 bg-[#F4F4F4] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-b-2 focus:border-[#07B0FB] focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput1"
          />
        <label
          htmlFor="exampleFormControlInput1"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[45px] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.25rem] peer-focus:text-sm peer-focus:scale-[0.8] peer-focus:text-[#07B0FB] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Enter the currency code
        </label>
      </div>

      <button
        onClick={handleExchangeCurrency}
        type="button"
        className="lg:w-80 my-10 inline-block rounded-full text-base bg-[#07B0FB] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
        EXCHANGE RESULT
      </button>
    </form>
  )
}