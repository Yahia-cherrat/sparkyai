
const Navbar = () => {
    return (
        
        <div className={`flex w-full items-center justify-between transition-all`}>
            <h1 className="text-[#FAF4F5] text-lg md:text-2xl font-medium">SparkyAI</h1>
            <ul className="flex items-center gap-x-4">
                <li className="p-2 rounded-md cursor-pointer hover:bg-[#FAF4F5]/10">
                    <a href="https://github.com/Yahia-cherrat/sparkyai" target="_blank">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 18.025 3.5875 22.7125 8.55 24.375C9.175 24.475 9.375 24.0875 9.375 23.75C9.375 23.4625 9.375 22.675 9.375 21.6375C5.9125 22.3875 5.175 19.9625 5.175 19.9625C4.6 18.5125 3.7875 18.125 3.7875 18.125C2.65 17.35 3.875 17.375 3.875 17.375C5.125 17.4625 5.7875 18.6625 5.7875 18.6625C6.875 20.5625 8.7125 20 9.425 19.7C9.5375 18.8875 9.8625 18.3375 10.2125 18.025C7.4375 17.7125 4.525 16.6375 4.525 11.875C4.525 10.4875 5 9.375 5.8125 8.4875C5.6875 8.175 5.25 6.875 5.9375 5.1875C5.9375 5.1875 6.9875 4.85 9.375 6.4625C10.3625 6.1875 11.4375 6.05 12.5 6.05C13.5625 6.05 14.6375 6.1875 15.625 6.4625C18.0125 4.85 19.0625 5.1875 19.0625 5.1875C19.75 6.875 19.3125 8.175 19.1875 8.4875C20 9.375 20.475 10.4875 20.475 11.875C20.475 16.65 17.55 17.7 14.7625 18.0125C15.2125 18.4 15.625 19.1625 15.625 20.325V23.75C15.625 24.0875 15.825 24.4875 16.4625 24.375C21.425 22.7 25 18.025 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0Z" fill="#FAF4F5"/>
                        </svg>
                    </a>
                </li>  
                <li className="p-2 rounded-md cursor-pointer hover:bg-[#FAF4F5]/10">
                    <a href="https://discord.gg/934853323213926460" target="_blank">
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9151 2.22834C18.8518 -0.0639775 15.9168 0.000448009 15.9168 0.000448009L15.6169 0.343159C19.2587 1.43572 20.9511 3.04234 20.9511 3.04234C15.7407 0.173675 9.10403 0.194259 3.68455 3.04234C3.68455 3.04234 5.44114 1.34991 9.29731 0.257347L9.08318 0.000180321C9.08318 0.000180321 6.1696 -0.0639775 3.08493 2.22807C3.08493 2.22807 0 7.77641 0 14.6103C0 14.6103 1.79963 17.6952 6.53397 17.8452C6.53397 17.8452 7.32659 16.9026 7.96924 16.0886C5.24867 15.2746 4.22026 13.5822 4.22026 13.5822C5.92954 14.6517 7.6578 15.3211 9.81164 15.7459C13.3157 16.4672 17.6745 15.7256 20.93 13.5822C20.93 13.5822 19.8588 15.3174 17.0524 16.11C17.6951 16.9026 18.4663 17.8238 18.4663 17.8238C23.2006 17.6739 25 14.5889 25 14.6106C24.9997 7.77667 21.9151 2.22834 21.9151 2.22834ZM8.50469 12.6182C7.30493 12.6182 6.31957 11.5684 6.31957 10.2617C6.40725 7.13215 10.624 7.14178 10.6898 10.2617C10.6898 11.5684 9.72556 12.6182 8.50469 12.6182ZM16.3237 12.6182C15.1239 12.6182 14.1386 11.5684 14.1386 10.2617C14.2348 7.1383 18.3989 7.13696 18.5088 10.2617C18.5088 11.5684 17.5448 12.6182 16.3237 12.6182Z" fill="#FAF4F5"/>
                        </svg>
                    </a>
                </li>
                <li className="p-2 rounded-md cursor-pointer hover:bg-[#FAF4F5]/10">
                    <a href="https://x.com/Cherratyahia" target="_blank">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 2.40312C24.0638 2.81809 23.0707 3.09028 22.0537 3.21062C23.1253 2.56993 23.9272 1.56142 24.31 0.373116C23.3033 0.971207 22.2015 1.3923 21.0525 1.61812C20.3485 0.868647 19.4356 0.347977 18.4321 0.123626C17.4286 -0.100726 16.3808 -0.0184098 15.4247 0.359899C14.4685 0.738208 13.6481 1.39506 13.0698 2.24527C12.4914 3.09549 12.1819 4.09985 12.1812 5.12812C12.1806 5.52142 12.2246 5.91352 12.3125 6.29687C10.2734 6.1945 8.27871 5.66452 6.45774 4.74133C4.63677 3.81814 3.03027 2.52237 1.7425 0.938117C1.08658 2.06731 0.885625 3.40403 1.18055 4.67617C1.47548 5.9483 2.24412 7.06024 3.33 7.78562C2.51491 7.76063 1.71766 7.54075 1.005 7.14437V7.20937C1.0052 8.3937 1.41507 9.5415 2.1651 10.4581C2.91513 11.3747 3.95913 12.0036 5.12 12.2381C4.6796 12.3579 4.22513 12.418 3.76875 12.4169C3.44457 12.417 3.12108 12.3869 2.8025 12.3269C3.13006 13.3458 3.76783 14.2369 4.62664 14.8757C5.48546 15.5144 6.5224 15.8688 7.5925 15.8894C5.44177 17.5727 2.71177 18.3354 0 18.0106C2.34507 19.5181 5.07468 20.3183 7.8625 20.3156C9.78221 20.3286 11.6854 19.96 13.4614 19.2313C15.2375 18.5026 16.8511 17.4283 18.2085 16.0708C19.5659 14.7132 20.6401 13.0995 21.3687 11.3234C22.0972 9.54726 22.4656 7.64407 22.4525 5.72437C22.4525 5.50187 22.4471 5.28103 22.4362 5.06187C23.4419 4.33487 24.3101 3.43456 25 2.40312Z" fill="#FAF4F5"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};
  
export default Navbar;
  