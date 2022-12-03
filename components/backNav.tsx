import type { NextPage } from "next";
import { useRouter } from "next/router";

const BackNav: NextPage = () => {
    const router = useRouter()
    return (
        <div className="shadow-sm brightness-110 opacity-90 bg-[#2a2f35] fixed w-full z-10 h-20 flex items-center">
            <svg onClick={() => { router.back() }} className="notapcolor pl-2 cursor-pointer" width="110" height="110" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1">
                    <g id="backward">
                        <path id="Vector 474 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M33.7071 37.2071C34.0976 36.8166 34.0976 36.1834 33.7071 35.7929L27.9142 30L33.7071 24.2071C34.0976 23.8166 34.0976 23.1834 33.7071 22.7929C33.3166 22.4024 32.6834 22.4024 32.2929 22.7929L26.5 28.5858C25.719 29.3668 25.719 30.6332 26.5 31.4142L32.2929 37.2071C32.6834 37.5976 33.3166 37.5976 33.7071 37.2071Z" fill="#6F7E8F" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default BackNav;
