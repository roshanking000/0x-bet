const DashboardPage = () => {
    return (
        <section className="flex flex-col gap-25 px-[130px] py-[72px]">
            <section className="flex flex-col gap-25">
                <section className="flex flex-col gap-[52px]">
                    <div className="flex flex-col gap-[52px]">
                        <div className="flex flex-col gap-8 uppercase text-[#FFF]">
                            <p className="text-[32px] font-normal leading-5">
                                The Launchpad Protocol
                                <span className="text-[#FE4F4C]">for Everyone!</span>
                            </p>
                            <p className="text-base font-medium uppercase font-['Source+Code+Pro']">PinkSale helps everyone to create their own tokens and token sales in few seconds.<br/>
                                Tokens created on PinkSale will be verified and published on explorer websites.</p>
                        </div>
                        <div className="flex gap-4">
                            <button type="button" className="h-10 px-6 py-3 text-xs font-bold uppercase text-[#1A1A1A] font-['Source+Code+Pro'] bg-[#FE4F4C]">Creat now</button>
                            <button type="button" className="h-10 px-6 py-3 text-xs font-bold uppercase text-[#1A1A1A] font-['Source+Code+Pro'] bg-[#E6E6E6]">learn more</button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center -gap-5 w-full bg-[url('assets/imgs/overview_background.png')] bg-no-repeat border-[1px] border-[#26242C] py-12 uppercase">
                        <div className="flex flex-col gap-8 justify-center items-center pl-[71px] pr-[55px] py-10">
                            <p className="text-[32px] text-[#FFF] font-normal leading-5">$119.7M</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Liquidity Raised</p>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center px-[77px] py-10">
                            <p className="text-[32px] text-[#FFF] font-normal leading-5">2652</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Projects</p>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center pl-[77px] pr-9 py-10">
                            <p className="text-[32px] text-[#FFF] font-normal leading-5">149.6K</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Participants</p>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center pl-[77px] pr-[71px] py-10">
                            <p className="text-[32px] text-[#FFF] font-normal leading-5">$344.8M</p>
                            <p className="text-base text-[#999] font-medium leading-5 font-['Source+Code+Pro']">Total Values Locked</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default DashboardPage;