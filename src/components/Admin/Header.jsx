import { AiOutlineBars, AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import avatarSrc from "../../assets/avatar.jpg";

const Header = () => {
    return (
        <div className="fixed top-20 right-0 w-9/12 h-16 flex items-center justify-between">
            <AiOutlineBars />
            <div className="search flex items-center relative">
                <BsSearch className="absolute left-4" />
                <input
                    className="bg-gray-200 rounded-full  h-10  p-2 pl-10 outline-none"
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="right flex items-center justify-between gap-4">
                <AiOutlineBell className="w-6 h-6" />
                <img src={avatarSrc} className="rounded-full w-8 h-8 object-cover" alt="avatar" />
                <AiOutlineSetting className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Header;
