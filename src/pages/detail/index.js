import { Link } from "react-router-dom";
import { Accordion } from 'flowbite-react';
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { WebsiteIcon, SmallTwitterIcon, SmallTelegramIcon, DiscordIcon, NotificationIcon, LikeIcon, CopyIcon } from "../../components/Icons";

import coinIcon from "../../assets/imgs/coin_image.png";
import bnbIcon from "../../assets/imgs/chain/BNB.png";

const Detail = () => {
  return (
    <section className="flex gap-5 px-[130px] py-12 text-white font-['Sora']">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="flex p-6 flex-col justify-center gap-8 bg-black">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <img alt="" src={coinIcon} />
                <img className="absolute right-0 bottom-0 w-6 h-6" alt="BNB" src={bnbIcon} />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <p className="text-xl font-extrabold leading-5 uppercase">Hydra Presale FL</p>
                <div className="flex gap-1">
                  <a href="##" target="_blank" rel="noreferrer">
                    <WebsiteIcon width="24" height="24" />
                  </a>
                  <a href="##" target="_blank" rel="noreferrer">
                    <SmallTwitterIcon width="24" height="24" />
                  </a>
                  <a href="##" target="_blank" rel="noreferrer">
                    <SmallTelegramIcon width="24" height="24" />
                  </a>
                  <a href="##" target="_blank" rel="noreferrer">
                    <DiscordIcon width="24" height="24" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <NotificationIcon />
              <LikeIcon />
              <div className="flex p-2 items-center gap-[6px] border-[1px] border-[#F6C36A] text-[#F6C36A]">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="currentColor" />
                </svg>
                <p className="text-xs leading-5">Upcoming</p>
              </div>
            </div>
          </div>
          <p className="text-sm">HYDRA (九頭蛇): THE FIRST EVER MULTICHAIN MEME - A NEW ARBITRAGE META! ETH, BSC, SOL, ARB, MATIC, FTM & AVAX! The first ever multichain (7 chains day 1) presale project starting the arbitrage meta 🎯 Top Defi marketing teams & developers from 100M+tokens📈 0% Tax 📣 | Top CT and KOL support🏖️| Bridged multichain trading👨‍💻| Telegram&buybot trending on 7 chains🎩| CMC+CG Fastrack🚦 Hydra wallet, swap & bridge🌠 | Tier 1&2 Exchanges⭐️| Audited</p>
          <div className="flex flex-col justify-center gap-5 text-sm">
            <div className="flex justify-between items-center">
              <p className="leading-5">Manual Listing</p>
              <p className="text-[#999] leading-5">Liquidity will not be automatically added!</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Presale Address</p>
              <div className="flex items-center gap-3">
                <p className="leading-5 underline">0x9EbE423416e7E86B8039FC94eF7B7C5FbDB9a278</p>
                <div className="cursor-pointer">
                  <CopyIcon />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Token Name</p>
              <p className="leading-5">Hydra</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Token Symbol</p>
              <p className="leading-5">HYDRA</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Token Decimals</p>
              <p className="leading-5">18</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Token Address</p>
              <div className="flex items-center gap-3">
                <p className="leading-5 underline">0x9EbE423416e7E86B8039FC94eF7B7C5FbDB9a278</p>
                <div className="cursor-pointer">
                  <CopyIcon />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Total Supply</p>
              <p className="leading-5">Total Supply</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Tokens For Presale</p>
              <p className="leading-5">200,000,000 HYDRA</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Initial Market Cap (estimate)</p>
              <p className="leading-5">$12,607</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Soft Cap</p>
              <p className="leading-5">5 ETH</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Presale Start Time</p>
              <p className="leading-5">2024.01.22 18:00 (UTC)</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Presale End Time</p>
              <p className="leading-5">2024.01.24 18:00 (UTC)</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Liquidity Percent</p>
              <p className="text-[#999] leading-5">(Manual listing)</p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-4 bg-black">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold leading-8 text-white">Affiliate Program</p>
            <ChevronUpIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex justify-between items-center">
              <p className="leading-5">Your Rewards</p>
              <p className="leading-5">0 ETH</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Pool Referrer Count</p>
              <p className="text-[#FE4F4C] leading-5">0</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Realtime Reward Percentage</p>
              <p className="text-[#7ADB78] leading-5">100%</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Current Rewards</p>
              <p className="leading-5">0 ETH</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5">Total Ref Amount</p>
              <p className="leading-5">0 ETH</p>
            </div>

          </div>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-4 bg-black">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold leading-8">Lock records</p>
            <Link to="" className="text-sm leading-5 underline text-[#FE4F4C]">View All</Link>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="text-base text-[#666] w-full">
                <th
                  scope="col"
                  className="text-left pb-[10px]"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="text-left px-4 pb-[10px]"
                >
                  Unlock time(UTC)
                </th>
                <th
                  scope="col"
                  className="text-left px-4 pb-[10px]"
                >
                </th>
              </tr>
            </thead>
            <tbody className="text-lg text-table-td text-white">
              {LockRecordData.map((item, index) => {
                return (
                  <tr key={index} className="py-[10px]">
                    <td className="pr-4">
                      {item.amount}
                    </td>
                    <td className="px-4">
                      {item.unlock_time}
                    </td>
                    <td className="text-right pl-4">
                      <Link to="" className="text-sm leading-5 underline text-[#FE4F4C]">View</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-5 bg-black">
          <p className="text-lg font-semibold leading-8">Frequently Asked Question</p>
          <div className="flex flex-col justify-center gap-4">
            <Accordion collapseAll className="rounded-none border-[#26242C] divide-y-0 bg-[#1A1A1A]">
              <Accordion.Panel>
                <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-[#1A1A1A] hover:bg-[#1A1A1A] !rounded-none px-6 py-4 focus:ring-0">What is KYC?</Accordion.Title>
                <Accordion.Content className="">
                  <p className="text-sm leading-5 bg-[#333] p-6 break-all">
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br/>
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br/>
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="rounded-none border-[#26242C] divide-y-0 bg-[#1A1A1A]">
              <Accordion.Panel>
                <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-[#1A1A1A] hover:bg-[#1A1A1A] !rounded-none px-6 py-4 focus:ring-0">What is an Audit?</Accordion.Title>
                <Accordion.Content className="">
                  <p className="text-sm leading-5 bg-[#333] p-6 break-all">
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br/>
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br/>
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="rounded-none border-[#26242C] divide-y-0 bg-[#1A1A1A]">
              <Accordion.Panel>
                <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-[#1A1A1A] hover:bg-[#1A1A1A] !rounded-none px-6 py-4 focus:ring-0">What is SAFU?</Accordion.Title>
                <Accordion.Content className="">
                  <p className="text-sm leading-5 bg-[#333] p-6 break-all">
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br/>
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br/>
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="rounded-none border-[#26242C] divide-y-0 bg-[#1A1A1A]">
              <Accordion.Panel>
                <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-[#1A1A1A] hover:bg-[#1A1A1A] !rounded-none px-6 py-4 focus:ring-0">What is Doxx?</Accordion.Title>
                <Accordion.Content className="">
                  <p className="text-sm leading-5 bg-[#333] p-6 break-all">
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br/>
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br/>
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="rounded-none border-[#26242C] divide-y-0 bg-[#1A1A1A]">
              <Accordion.Panel>
                <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-[#1A1A1A] hover:bg-[#1A1A1A] !rounded-none px-6 py-4 focus:ring-0">What is DYOR?</Accordion.Title>
                <Accordion.Content className="">
                  <p className="text-sm leading-5 bg-[#333] p-6 break-all">
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br/>
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br/>
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail;

const LockRecordData = [
  {
    amount: 100000000,
    unlock_time: "2024.01.24 18:01"
  },
  {
    amount: 100000000,
    unlock_time: "2024.01.24 18:01"
  },
  {
    amount: 100000000,
    unlock_time: "2024.01.24 18:01"
  },
  {
    amount: 100000000,
    unlock_time: "2024.01.24 18:01"
  },
  {
    amount: 100000000,
    unlock_time: "2024.01.24 18:01"
  },
];