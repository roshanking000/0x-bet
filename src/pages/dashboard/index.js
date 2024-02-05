import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col gap-[100px] py-[72px] sm:max-w-7xl mx-auto">
            <section className="flex flex-col gap-[52px]">
                <div className="flex flex-col gap-[52px]">
                    <div className="flex flex-col gap-8 uppercase text-[#FFF]">
                        <p className="sm:text-[32px] text-[28px] font-normal sm:leading-5">
                            The Launchpad Protocol
                            <span className="text-[#FE4F4C]"> for Everyone!</span>
                        </p>
                        <p className="text-base font-medium uppercase font-['Source+Code+Pro'] leading-5">PinkSale helps everyone to create their own tokens and token sales in few seconds.<br />
                            Tokens created on PinkSale will be verified and published on explorer websites.</p>
                    </div>
                    <div className="flex gap-4">
                        <button type="button" className="h-10 px-6 py-3 text-xs font-bold uppercase text-[#1A1A1A] font-['Source+Code+Pro'] bg-[#FE4F4C]">Creat now</button>
                        <button type="button" className="h-10 px-6 py-3 text-xs font-bold uppercase text-[#1A1A1A] font-['Source+Code+Pro'] bg-[#E6E6E6]">learn more</button>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-center items-center -gap-5 w-full bg-[url('assets/imgs/overview_background.png')] bg-cover bg-no-repeat border border-[#26242C] py-12 uppercase">
                    <div className="flex flex-col gap-8 justify-center items-center sm:pl-[71px] sm:pr-[55px] py-10">
                        <p className="text-[32px] text-[#FFF] font-normal leading-5">$119.7M</p>
                        <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Liquidity Raised</p>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center sm:px-[77px] py-10">
                        <p className="text-[32px] text-[#FFF] font-normal leading-5">2652</p>
                        <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Projects</p>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center sm:pl-[77px] sm:pr-9 py-10">
                        <p className="text-[32px] text-[#FFF] font-normal leading-5">149.6K</p>
                        <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Participants</p>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center sm:pl-[77px] sm:pr-[71px] py-10">
                        <p className="text-[32px] text-[#FFF] font-normal leading-5">$344.8M</p>
                        <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Values Locked</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[52px]">
                <div className="flex flex-col gap-8 uppercase text-[#FFF]">
                    <p className="sm:text-[32px] text-[28px] font-normal sm:leading-5">
                        A Suite of Tools for Token Sales.
                    </p>
                    <p className="text-base font-medium uppercase font-['Source+Code+Pro'] leading-5 sm:w-[940px]">A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-10 uppercase text-[#FFF]">
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft1.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Standard</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft2.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Deflationary</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Generate deflationary tokens with tax and/or charity functions.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft3.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Customization</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Create a token sale for your own custom token easily.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft4.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Launchpad</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Use the token you mint to create a launchpad with just a few clicks</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft5.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Branding</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Adding logo, social links, description, listing on PinkSale.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft6.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Management</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">The portal to help you easily update content for your launchpad.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft7.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Community</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Promote your launchpad to thousands of buyers on PinkSale.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft8.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">Locking</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Lock your liquidity to PinkSwap, PancakeSwap after presale.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[52px]">
                <div className="flex flex-col gap-8 uppercase text-[#FFF]">
                    <p className="sm:text-[32px] text-[28px] font-normal sm:leading-5">
                    A Growing Protocol Ecosystem.
                    </p>
                    <p className="text-base font-medium uppercase font-['Source+Code+Pro'] leading-5 sm:w-[940px]">We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-10 uppercase text-[#FFF]">
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft9.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkMoon</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">The best launchpad for professional teams</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft10.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkSale</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Swap tokens and farming $PinkS.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft11.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkSwap</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Create a token sale for your own custom token easily.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft12.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkLock</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Locking liquidity on PinkSwap.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft13.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkElon</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">The first meme token on PinkMoon.</p>
                        </div>
                    </div>
                    <div className="relative border border-[#26242C] bg-[url('assets/imgs/nft14.png')] bg-no-repeat h-[444px] bg-cover cursor-pointer" onClick={() => navigate("/detail")}>
                        <div className="absolute left-0 right-0 mx-auto top-[65%] flex flex-col gap-8 sm:w-[290px] w-full px-4">
                            <p className="text-2xl font-normal leading-5">PinkWallet</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Crypto wallet, buy, store, exchange & earn.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default DashboardPage;