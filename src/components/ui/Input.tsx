export function Input() {
  return (
    <div className="relative mb-3" data-te-input-wrapper-init>
      <input
        type="text"
        className="h-12 peer block min-h-[auto] w-full border-0 bg-[#F4F4F4] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-b-2 focus:border-[#07B0FB] focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInput1"
        placeholder="Example label"/>
      <label
        htmlFor="exampleFormControlInput1"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.25rem] peer-focus:text-sm peer-focus:scale-[0.8] peer-focus:text-[#07B0FB] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        Enter the currency code
      </label>
    </div>
)
}