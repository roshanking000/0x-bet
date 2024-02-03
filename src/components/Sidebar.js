import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { HomeIcon, LaunchpadIcon, PinklockIcon, AirdropIcon, StakingIcon, PrivateSaleIcon, BuyCryptoFiatIcon, BridgeIcon, LeaderBoardIcon, AntiBotIcon, MultiSenderIcon, DexviewIcon, PoolsAlertIcon, KYCAuditIcon, DocIcon, ShopIcon, TelegramIcon, TwitterIcon, FacebookIcon } from "./Icons";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col border-r-[1px] border-[#FFF]">
            <div className="flex p-6 justify-center items-center gap-10 bg-white">
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_1_104)">
                        <path d="M0 4.79998C0 4.13726 0.537281 3.59998 1.2 3.59998H22.8C23.4627 3.59998 24 4.13726 24 4.79998C24 5.46269 23.4627 5.99998 22.8 5.99998H1.2C0.537281 5.99998 0 5.46265 0 4.79998ZM22.8 10.8H1.2C0.537281 10.8 0 11.3373 0 12C0 12.6627 0.537281 13.2 1.2 13.2H22.8C23.4627 13.2 24 12.6627 24 12C24 11.3373 23.4627 10.8 22.8 10.8ZM22.8 18H1.2C0.537281 18 0 18.5373 0 19.2C0 19.8626 0.537281 20.4 1.2 20.4H22.8C23.4627 20.4 24 19.8626 24 19.2C24 18.5373 23.4627 18 22.8 18Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_104">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <Link to="/dashboard" className="flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                        <path d="M16.5771 46.8232C11.1428 45.0558 6.51746 41.4074 3.53305 36.5341C0.54864 31.6609 -0.599 25.8827 0.296554 20.2388C1.19211 14.5949 4.07208 9.45581 8.41846 5.7458C12.7648 2.03579 18.2924 -0.00163265 24.0069 9.807e-07C29.7213 0.00163461 35.2477 2.04222 39.592 5.75471C43.9362 9.46721 46.8133 14.608 47.7056 20.2523C48.5979 25.8967 47.447 31.6743 44.4598 36.5458C41.4726 41.4174 36.8452 45.0632 31.4099 46.8275L26.223 30.8482C27.8536 30.3189 29.2418 29.2252 30.1379 27.7637C31.0341 26.3023 31.3794 24.569 31.1117 22.8757C30.844 21.1824 29.9809 19.6402 28.6776 18.5264C27.3743 17.4127 25.7164 16.8005 24.0021 16.8C22.2877 16.7995 20.6295 17.4107 19.3255 18.5237C18.0216 19.6367 17.1576 21.1785 16.889 22.8716C16.6203 24.5648 16.9646 26.2983 17.8599 27.7602C18.7552 29.2222 20.1428 30.3167 21.7731 30.847L16.5771 46.8232Z" fill="black" />
                    </svg>
                    <p className="text-xl font-normal">0xBet</p>
                </Link>
            </div>
            <div className="flex flex-col px-6 py-3 gap-1 text-sm font-normal uppercase text-[#999]">
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <HomeIcon />
                    <p>home</p>
                </div>
                <div className="flex px-6 py-4 justify-between items-center bg-white cursor-pointer" onClick={() => navigate("/launchpad")}>
                    <div className="flex items-center gap-3">
                        <LaunchpadIcon />
                        <p className="text-[#1A1A1A]">launchpads</p>
                    </div>
                    <ChevronDownIcon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div className="flex px-6 py-4 justify-between items-center cursor-pointer hover:bg-[#1A1A1A]">
                    <div className="flex items-center gap-3">
                        <PinklockIcon />
                        <p>pinklock</p>
                    </div>
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
                <div className="flex px-6 py-4 justify-between items-center cursor-pointer hover:bg-[#1A1A1A]">
                    <div className="flex items-center gap-3">
                        <AirdropIcon />
                        <p>airdrop</p>
                    </div>
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
                <div className="flex px-6 py-4 justify-between items-center cursor-pointer hover:bg-[#1A1A1A]">
                    <div className="flex items-center gap-3">
                        <StakingIcon />
                        <p>staking</p>
                    </div>
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <PrivateSaleIcon />
                    <p>private sale</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <BuyCryptoFiatIcon />
                    <p>buy crypto fiat</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <BridgeIcon />
                    <p>bridge</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <LeaderBoardIcon />
                    <p>leaderboard</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <AntiBotIcon />
                    <p>anti-bot</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <MultiSenderIcon />
                    <p>multi-sender</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <DexviewIcon />
                    <p>dexview.com</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <PoolsAlertIcon />
                    <p>pools alert</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <KYCAuditIcon />
                    <p>kyc $ audit</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <DocIcon />
                    <p>docs</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <ShopIcon />
                    <p>shop</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <TelegramIcon />
                    <p>telegram</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <TwitterIcon />
                    <p>twitter</p>
                </div>
                <div className="flex px-6 py-4 items-center gap-3 cursor-pointer hover:bg-[#1A1A1A]">
                    <FacebookIcon />
                    <p>facebook</p>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;