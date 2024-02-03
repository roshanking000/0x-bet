import { Link } from "react-router-dom";
import { Accordion, Progress, Checkbox, Label } from 'flowbite-react';

import { TokenMetrics } from "../../components/detail/TokenMetrics";
import { WebsiteIcon, SmallTwitterIcon, SmallTelegramIcon, DiscordIcon, NotificationIcon, LikeIcon, CopyIcon, ETHIcon } from "../../components/Icons";

import coinIcon from "../../assets/imgs/coin_image.png";
import bnbIcon from "../../assets/imgs/chain/BNB.png";
import user1Icon from "../../assets/imgs/user1.png";
import user2Icon from "../../assets/imgs/user2.png";
import user3Icon from "../../assets/imgs/user3.png";
import user4Icon from "../../assets/imgs/user4.png";
import user5Icon from "../../assets/imgs/user5.png";

const ProgressTheme = {
  base: 'bg-[#1A1A1A]',
  bar: 'rounded-none',
  size: {
    'sm': 'h-3'
  },
  color: {
    'red': 'bg-[#FE4F4C]'
  }
};

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
              <div className="flex p-2 items-center gap-[6px] border border-[#F6C36A] text-[#F6C36A]">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="currentColor" />
                </svg>
                <p className="text-xs leading-5">Upcoming</p>
              </div>
            </div>
          </div>
          <p className="text-sm">HYDRA (九頭蛇): THE FIRST EVER MULTICHAIN MEME - A NEW ARBITRAGE META! ETH, BSC, SOL, ARB, MATIC, FTM & AVAX! The first ever multichain (7 chains day 1) presale project starting the arbitrage meta 🎯 Top Defi marketing teams & developers from 100M+tokens📈 0% Tax 📣 | Top CT and KOL support🏖️| Bridged multichain trading👨‍💻| Telegram&buybot trending on 7 chains🎩| CMC+CG Fastrack🚦 Hydra wallet, swap & bridge🌠 | Tier 1&2 Exchanges⭐️| Audited</p>
          <iframe
            className="w-full h-[480px]"
            src={`https://www.youtube.com/embed/KaLxCiilHns`}
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
            allowfullscreen
            title="Embedded youtube"
          />
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
          <Accordion className="rounded-none border-black divide-y-0 bg-black">
            <Accordion.Panel>
              <Accordion.Title className="text-lg text-white font-semibold leading-8 bg-black hover:bg-black !rounded-none px-0 py-0 focus:ring-0">Affiliate Program</Accordion.Title>
              <Accordion.Content className="px-0 py-4">
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
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-4 bg-black">
          <p className="text-lg font-semibold text-white">Token Metrics</p>
          <TokenMetrics />
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
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br />
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br />
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
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br />
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br />
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
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br />
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br />
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
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br />
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br />
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
                    Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.<br />
                    More information about KYC can be found on the Binance Academy website via:<span className="text-[#FE4F4C] underline">https://academy.binance.com/en/glossary/know-your-customer</span><br />
                    More information on PinkSale KYC process can be seen explained in here:<span className="text-[#FE4F4C] underline">https://docs.pinksale.finance/important/pinksale-kyc</span>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-8 bg-black">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center justify-between gap-4 w-full">
              <p className="text-lg font-semibold leading-8">Comments (0)</p>
              <Link to="" className="text-sm leading-5 underline text-[#FE4F4C]">View All</Link>
            </div>
            <div className="flex items-center gap-5 w-full">
              <div className="w-16 h-16">
                <img alt="" src={coinIcon} />
              </div>
              <input type="text" className="flex-1 h-[56px] p-3 border border-white bg-black text-[#999] focus:ring-0 focus:border-white" placeholder="Enter your email address" />
              <button type="button" className="bg-[#FE4F4C] text-xs font-bold leading-5 uppercase text-[#1A1A1A] font-['Source+Code+Pro'] px-4 py-3 h-[56px]">Comment</button>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-white text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full">
                <img alt="" src={user1Icon} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="leading-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
                <p className="text-[#666] leading-4">
                  12h ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full">
                <img alt="" src={user2Icon} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="leading-4">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <p className="text-[#666] leading-4">
                  12h ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full">
                <img alt="" src={user3Icon} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="leading-4">
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
                <p className="text-[#666] leading-4">
                  12h ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full">
                <img alt="" src={user4Icon} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="leading-4">
                  But also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <p className="text-[#666] leading-4">
                  12h ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full">
                <img alt="" src={user5Icon} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="leading-4">
                  It was popularised in the 1960s with the release of Letraset sheets containing
                </p>
                <p className="text-[#666] leading-4">
                  12h ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/3 text-sm text-white">
        <div className="relative px-6 pt-7 pb-5 bg-black border border-orange-300 border-opacity-30 flex-col justify-start items-start gap-6 inline-flex">
          <div className="absolute left-0 right-0 -top-5 mx-auto w-fit text-xs font-bold leading-5 text-black px-3 py-2 rounded-full border-[2px] border-[#4A3A20] bg-[#F6C36A]">Affiliate 5%</div>
          <div className="self-stretch px-3 py-2 bg-zinc-900 justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 h-8 justify-start items-center gap-2 flex">
              <div className="grow shrink basis-0 text-white text-sm font-semibold leading-loose">Make sure the website is pinksale.finance!</div>
            </div>
          </div>
          <div className="self-stretch flex-col items-center gap-3 flex">
            <div className="text-white text-sm font-normal leading-tight tracking-wide">Presale Starts In</div>
            <div className="justify-center items-start gap-3 inline-flex">
              <div className="w-[52px] h-[52px] p-3 bg-zinc-900 border border-white justify-center items-center gap-[129px] flex">
                <div className="items-center gap-1 flex">
                  <div className="text-white text-base font-normal uppercase leading-3 tracking-widest">00</div>
                </div>
              </div>
              <div className="w-[52px] h-[52px] p-3 bg-zinc-900 border border-white justify-center items-center gap-[129px] flex">
                <div className="items-center gap-1 flex">
                  <div className="text-white text-base font-normal uppercase leading-3 tracking-widest">23</div>
                </div>
              </div>
              <div className="w-[52px] h-[52px] p-3 bg-zinc-900 border border-white justify-center items-center gap-[129px] flex">
                <div className="items-center gap-1 flex">
                  <div className="text-white text-base font-normal uppercase leading-3 tracking-widest">37</div>
                </div>
              </div>
              <div className="w-[52px] h-[52px] p-3 bg-zinc-900 border border-white justify-center items-center gap-[129px] flex">
                <div className="items-center gap-1 flex">
                  <div className="text-white text-base font-normal uppercase leading-3 tracking-widest">51</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col gap-2 flex w-full">
            <Progress progress={25} size="sm" color="red" theme={ProgressTheme} />
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-50 text-xs font-normal leading-tight tracking-wide">0 ETH</div>
              <div className="text-right text-white text-opacity-50 text-xs font-normal leading-tight tracking-wide">5 ETH</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-center gap-[55px] inline-flex">
              <div className="text-white text-xs font-normal uppercase leading-[15px]">Amount (max: 5 ETH)</div>
            </div>
            <div className="p-3 bg-zinc-900 border border-white justify-between items-center inline-flex w-full">
              <div className="absolute w-6 h-6">
                <ETHIcon />
              </div>
              <div className="absolute right-10">
                <p className="text-base uppercase font-['Space+Grotesk']">max</p>
              </div>
              <input type="text" className="pl-8 text-[#999] bg-zinc-900 border-none focus:ring-0" />
            </div>
          </div>
          <div className="self-stretch justify-end items-center gap-6 inline-flex">
            <button type="button" className="flex-1 p-4 bg-[#FE4F4C] grow shrink basis-0 text-center text-zinc-900 text-xs font-normal uppercase leading-tight tracking-wide">
              Connect Wallet
            </button>
            <p className="flex-0 text-white text-xs font-bold font-['Source+Code+Pro'] uppercase leading-tight tracking-[0.42px]">Auto Buy</p>
          </div>
          <p className="text-white text-xs font-bold font-['Source+Code+Pro'] leading-tight tracking-[0.42px]">Affiliate detail</p>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-5 justify-center bg-black text-sm">
          <div className="flex justify-between items-center">
            <p>Status</p>
            <p>incoming</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Sale Type</p>
            <p>Public</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Current Rate</p>
            <p>N/A</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Max Contribution</p>
            <p>5 ETH</p>
          </div>
        </div>
        <div className="flex px-6 pt-4 pb-6 flex-col gap-4 bg-black text-sm text-white">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold">Newsletters</p>
            <div className="flex items-center gap-2">
              <Checkbox className="w-6 h-6 bg-black rounded-none focus:ring-0 focus:outline-0" id="never_show_again" />
              <Label htmlFor="never_show_again" className="text-sm font-['Sora'] font-normal text-white">Never show again</Label>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p>Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.</p>
            <input type="text" className="h-14 p-3 text-[#999] bg-transparent border border-white focus:ring-0 focus:border-white" placeholder="Enter your email address" />
            <button className="px-4 py-3 bg-[#FE4F4C] text-xs font-bold leading-5 uppercase text-[#1A1A1A] font-['Source+Code+Pro'] w-fit">Subscribe</button>
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