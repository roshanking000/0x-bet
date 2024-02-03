import { DexviewIcon, EthereumIcon } from "./Icons"

export const Header = () => {
  return (
    <header className="flex justify-end items-center px-10 py-7 gap-10 border-b-[1px] border-[#26242C]">
      <a href="##" target="_blank" rel="noreferrer" className="flex px-3 py-2 items-center gap-2 border border-[#FFF] h-10">
        <DexviewIcon />
        <p className="text-base font-normal text-[#E6E6E6] font-['Sora']">dexview.com</p>
      </a>
      <div className="flex items-center gap-2 h-10">
        <div className="p-2 border border-[#E6E6E6]">
          <EthereumIcon />
        </div>
        <p className="text-base font-normal text-[#E6E6E6] font-['Sora']">ETH MAINNET</p>
      </div>
      <button type="button" className="px-6 py-3 text-xs font-bold text-[#1A1A1A] bg-[#E6E6E6] h-10">CONNECT</button>
    </header>
  )
}