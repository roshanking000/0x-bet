import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from 'flowbite-react';
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Pagination from "../../components/pagination";
import { NotificationIcon, LikeIcon, KYCFailIcon, KYCSuccessIcon, WebsiteIcon, SmallTwitterIcon, SmallTelegramIcon, DiscordIcon } from "../../components/Icons";

import coinIcon from "../../assets/imgs/coin_image.png";
import bnbIcon from "../../assets/imgs/chain/BNB.png";
import bnbSmallIcon from "../../assets/imgs/chain/BNB_small.png";

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

const AllLaunchpadComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="p-6 bg-black shadow flex-col justify-center gap-8 flex">
      <div className="flex justify-between items-center gap-[100px]">
        <div className="w-[530px] h-12 bg-neutral-950 items-center inline-flex">
          <div className="h-12 px-3 border border-white items-center gap-5 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.97 19.19C6.43 19.19 2.75 15.51 2.75 10.97C2.75 6.43 6.43 2.75 10.97 2.75C15.51 2.75 19.19 6.43 19.19 10.97C19.19 15.51 15.51 19.19 10.97 19.19Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.25 21.25L17.14 17.14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input type="text" className="grow shrink basis-0 self-stretch p-3 border-r border-t border-b border-white items-center gap-2.5 flex text-neutral-400 text-sm font-['Sora'] leading-tight bg-black focus:outline-0" placeholder="Search"></input>
        </div>
        <div className="h-6 gap-9 inline-flex text-white text-xs uppercase leading-3 text-nowrap">
          <div className="items-center gap-2 flex">
            <div>Filter By</div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="items-center gap-2 flex">
            <div>Pool Type</div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="items-center gap-2 flex">
            <div>Sort By</div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="items-center gap-2 flex">
            <div>Chain</div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 font-['Sora']">
        {allLaunchpadData.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer relative flex flex-col gap-6 px-4 pt-4 pb-5 border border-[#26242C]" onClick={() => navigate("/detail")}>
              {item.affiliate === true && (
                <div className="absolute left-0 right-0 -top-5 mx-auto w-fit text-xs font-bold leading-5 text-black px-3 py-2 rounded-full border-[2px] border-[#4A3A20] bg-[#F6C36A]">Affiliate {item.affiliate_percent}%</div>
              )}
              <div className={clsx("absolute right-4 top-4 flex p-2 items-center gap-[6px] border", item.status === "upcoming" ? "border-[#F6C36A] text-[#F6C36A]" : item.status === "sale live" ? "border-[#7ADB78] text-[#7ADB78]" : "border-[#7F7F7F] text-[#7F7F7F]")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="currentColor" />
                </svg>
                <p className="text-xs leading-5">{item.status === "upcoming" ? "Upcoming" : item.status === "sale live" ? "Sale Live" : "Canceled"}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-16 h-16">
                  <img alt="" src={coinIcon} />
                  <img className="absolute right-0 bottom-0 w-6 h-6" alt="BNB" src={bnbIcon} />
                </div>
                <div className="flex flex-col gap-3 uppercase">
                  <p className="text-xl font-extrabold text-white leading-5">ecocoin</p>
                  <p className="text-sm text-[#FFFFFF80]">1 BUSD = 21,000 ECO</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Soft/Hard</p>
                <p className="text-base font-semibold leading-5 text-[#7ADB78]">21,000 BUSD - 39,998 BUSD</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white">Progress (0.00%)</p>
                <div className="flex flex-col gap-2">
                  <Progress progress={25} size="sm" color="red" theme={ProgressTheme} />
                  <div className="flex justify-between items-center text-xs leading-5 text-[#FFFFFF80]">
                    <p>0 BUSD</p>
                    <p>39,998 BUSD</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm text-white">
                  <p>Liquidity %</p>
                  <p>70%</p>
                </div>
                <div className="flex justify-between items-center text-sm text-white">
                  <p>Lockup Time</p>
                  <p>2000 days</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-[1px] border-[#26242C] pt-5">
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-[#FFFFFF80]">Sale Starts In</p>
                  <p className="text-base font-bold leading-5 text-white">11:21:38:16</p>
                </div>
                <div className="flex items-center gap-4">
                  <NotificationIcon />
                  <LikeIcon />
                  <button type="button" className="text-xs font-bold font-['Source+Code+Pro'] leading-5 uppercase text-[#1A1A1A] bg-[#FE4F4C] px-4 py-3">view</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const AdvancedModeComponent = () => {
  return (
    <section className="flex flex-col gap-5 font-['Sora']">
      <div className="flex flex-col px-6 bg-black">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="text-base text-[#666] py-[10px] w-full border-b-[1px] border-[#666]">
                    <th
                      scope="col"
                      className="text-left py-[10px]"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      HC
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        Coin
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        InitialCap
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        KYC/Audit
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        Status
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        Links
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        TGOnline
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left px-4 py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        Countdown
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="text-left py-[10px]"
                    >
                      <span className="cursor-pointer inline-flex items-center">
                        Sale
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-lg text-table-td text-white">
                  {CoinListData.map((item, index) => {
                    return (
                      <tr key={index} className="h-[60px] py-2">
                        <td>
                          <div className="flex gap-[6px] items-center py-[10px]">
                            <img className="w-4 h-4" alt="BNB" src={bnbSmallIcon} />
                            <p>{item.name}</p>
                          </div>
                        </td>
                        <td className="px-4">
                          {item.hc}
                        </td>
                        <td className="px-4">
                          {item.coin}
                        </td>
                        <td className="px-4">
                          {item.initialcap}
                        </td>
                        <td className="px-4">
                          <div className="flex gap-1">
                            <KYCFailIcon />
                            <KYCFailIcon />
                            <KYCFailIcon />
                            <KYCSuccessIcon />
                          </div>
                        </td>
                        <td className="px-4">
                          <div className={clsx("flex w-fit p-2 items-center gap-[6px] border", item.status === "upcoming" ? "border-[#F6C36A] text-[#F6C36A]" : "border-[#FE4F4C] text-[#FE4F4C]")}>
                            {item.status === "upcoming" && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="currentColor" />
                              </svg>
                            )}
                            <p className="text-xs leading-5">{item.status === "upcoming" ? "Upcoming" : item.percent + "%"}</p>
                          </div>
                        </td>
                        <td className="px-4">
                          <div className="flex gap-1">
                            <a href="##" target="_blank" rel="noreferrer">
                              <WebsiteIcon width="16" height="16" />
                            </a>
                            <a href="##" target="_blank" rel="noreferrer">
                              <SmallTwitterIcon width="16" height="16" />
                            </a>
                            <a href="##" target="_blank" rel="noreferrer">
                              <SmallTelegramIcon width="16" height="16" />
                            </a>
                            <a href="##" target="_blank" rel="noreferrer">
                              <DiscordIcon width="16" height="16" />
                            </a>
                          </div>
                        </td>
                        <td className="px-4">
                          {item.tgonline}
                        </td>
                        <td className="px-4">
                          00:00:00:00
                        </td>
                        <td>
                          00:00:00:00
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        pageCount={5}
        gotoPage={(page) => {
        }}
      />
    </section>
  )
}

const MyContributionComponent = () => {
  return (
    <></>
  )
}

const LaunchpadPage = () => {
  const [currentTab, setCurrentTab] = useState("ALL LAUNCHPADS");

  return (
    <section className="flex flex-col gap-6 px-[130px] py-[72px]">
      <div className="flex flex-col gap-[61px]">
        <p className="text-[32px] leading-5 text-[#FFF] uppercase">
          Current Presales
        </p>
        <div className="flex w-full text-center">
          <div className={clsx("text-sm uppercase p-4 border border-[#FFF] w-1/3 cursor-pointer", currentTab === "ALL LAUNCHPADS" ? "text-[#1A1A1A] bg-[#FFF]" : "text-[#999] bg-[#000]")} onClick={() => setCurrentTab("ALL LAUNCHPADS")}>
            All launchpads
          </div>
          <div className={clsx("text-sm uppercase p-4 border border-[#FFF] w-1/3 cursor-pointer", currentTab === "ADVANCED MODE" ? "text-[#1A1A1A] bg-[#FFF]" : "text-[#999] bg-[#000]")} onClick={() => setCurrentTab("ADVANCED MODE")}>
            Advanced Mode
          </div>
          <div className={clsx("text-sm uppercase p-4 border border-[#FFF] w-1/3 cursor-pointer", currentTab === "MY CONTRIBUTIONS" ? "text-[#1A1A1A] bg-[#FFF]" : "text-[#999] bg-[#000]")} onClick={() => setCurrentTab("MY CONTRIBUTIONS")}>
            My Contributions
          </div>
        </div>
      </div>
      {currentTab === "ALL LAUNCHPADS" ? <AllLaunchpadComponent /> : currentTab === "ADVANCED MODE" ? <AdvancedModeComponent /> : <MyContributionComponent />}
    </section>
  )
}

export default LaunchpadPage;

const allLaunchpadData = [
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: false,
  },
  {
    coin_name: "ecocoin",
    status: "sale live",
    affiliate: true,
    affiliate_percent: 5
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: true,
    affiliate_percent: 5
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: true,
    affiliate_percent: 5
  },
  {
    coin_name: "ecocoin",
    status: "canceled",
    affiliate: true,
    affiliate_percent: 5
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: false,
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: false,
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: false,
  },
  {
    coin_name: "ecocoin",
    status: "upcoming",
    affiliate: true,
    affiliate_percent: 5
  }
];

const CoinListData = [
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "Fairlaunch",
    coin: "NFT",
    initialcap: "$24M",
    status: "progress",
    percent: 12,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "Fairlaunch",
    coin: "NFT",
    initialcap: "$24M",
    status: "progress",
    percent: 12,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "progress",
    percent: 12,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
  {
    name: "Maga",
    chain: "BNB",
    hc: "150",
    coin: "NFT",
    initialcap: "$24M",
    status: "upcoming",
    percent: 0,
    tgonline: "124/5k"
  },
];