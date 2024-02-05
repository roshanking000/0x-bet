import { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import clsx from "clsx";
import { GrLaunch } from "react-icons/gr";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useSidebarContext } from "../context/SidebarContext";
import isSmallScreen from "../helpers/is-small-screen";
import { HomeIcon, LaunchpadIcon, PinklockIcon, AirdropIcon, StakingIcon, PrivateSaleIcon, BuyCryptoFiatIcon, BridgeIcon, LeaderBoardIcon, AntiBotIcon, MultiSenderIcon, DexviewIcon, PoolsAlertIcon, KYCAuditIcon, DocIcon, ShopIcon, TelegramIcon, TwitterIcon, FacebookIcon } from "./Icons";

const SidebarTheme = {
    root: {
        collapsed: {
            on: "w-24"
        },
        inner: "h-full overflow-y-auto px-6 py-3 gap-1 text-sm font-normal uppercase text-[#999] bg-[#090909] border-r-[1px] border-[#FFF]"
    },
    item: {
        base: "flex px-2 py-2 items-center gap-3 cursor-pointer",
        content: {
            base: ""
        }
    }
};

const SidebarComponent = () => {
    const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
        useSidebarContext();

    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        const newPage = window.location.pathname;
        setCurrentPage(newPage);
    }, [setCurrentPage])

    return (
        <section className={clsx("lg:!block z-40", !isSidebarOpenOnSmallScreens ? "hidden" : "")}>
            <Sidebar
                theme={SidebarTheme}
                collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
                className="fixed left-0 top-0 pt-[100px] duration-75"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/dashboard"
                            icon={HomeIcon}
                            className={currentPage === "/dashboard" ? "text-[#1A1A1A] bg-white" : ""}
                        >
                            home
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/launchpad"
                            icon={GrLaunch}
                            className={currentPage === "/launchpad" ? "text-[#1A1A1A] bg-white" : ""}
                        >
                            launchpads
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={PinklockIcon}
                        >
                            pinklock
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={AirdropIcon}
                        >
                            airdrop
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={StakingIcon}
                        >
                            staking
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={PrivateSaleIcon}
                        >
                            private sale
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={BuyCryptoFiatIcon}
                        >
                            buy crypto fiat
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={BridgeIcon}
                        >
                            bridge
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={LeaderBoardIcon}
                        >
                            leaderboard
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={AntiBotIcon}
                        >
                            anti-bot
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={MultiSenderIcon}
                        >
                            multi-sender
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={DexviewIcon}
                        >
                            dexview .com
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={PoolsAlertIcon}
                        >
                            pools alert
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={KYCAuditIcon}
                        >
                            kyc $ audit
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={DocIcon}
                        >
                            docs
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={ShopIcon}
                        >
                            shop
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={TelegramIcon}
                        >
                            telegram
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={TwitterIcon}
                        >
                            twitter
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/"
                            icon={FacebookIcon}
                        >
                            facebook
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </section>
    )
}

export default SidebarComponent;