import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import {
    AiFillCheckCircle,
    AiFillDingtalkCircle,
    AiFillDropboxCircle,
    AiFillGitlab,
    AiFillSketchCircle,
    AiFillMediumCircle,
    AiFillHeart,
    AiFillInsurance,
    AiFillCaretDown,
    AiFillCaretUp,
} from "react-icons/ai";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
    const [moreProducts, setMoreProducts] = useState(false);

    const toggleProductsHandler = () => {
        setMoreProducts((prevState) => !prevState);
    };

    return (
        <div className={`${classes.sidebar} w-60 bg-gray-800 text-white p-4 flex flex-col gap-2`}>
           
            <h3 className="text-center uppercase bg-red-300">
                <Link to="#products">Products</Link>
            </h3>
            <ul className="" id="">
                <li className="flex items-center gap-2">
                    <AiFillCheckCircle />
                    <NavLink className="hover:text-pink-700" activeClassName="border-2 shadow" to="AmericanCake">
                        Bánh táo Mỹ
                    </NavLink>
                </li>
                <li className="flex items-center gap-2">
                    <AiFillDingtalkCircle />
                    <NavLink className="hover:text-pink-700" activeClassName="border-2 shadow" to="AmericanCake">
                        Bánh Mochi Nhật Bản
                    </NavLink>
                </li>
                <li className="flex items-center gap-2">
                    <AiFillDropboxCircle />
                    <NavLink className="hover:text-pink-700" activeClassName="border-2 shadow" to="AmericanCake">
                        Bánh Tiramisu Ý
                    </NavLink>
                </li>
                {moreProducts && (
                    <>
                        <li className="flex items-center gap-2">
                            <AiFillGitlab />
                            <NavLink
                                className="hover:text-pink-700"
                                activeClassName="border-2 shadow"
                                to="AmericanCake"
                            >
                                Bánh Macaron Pháp.
                            </NavLink>
                        </li>
                        <li className="flex items-center gap-2">
                            <AiFillHeart />
                            <NavLink
                                className="hover:text-pink-700"
                                activeClassName="border-2 shadow"
                                to="AmericanCake"
                            >
                                Bánh Tapioca Brazil.
                            </NavLink>
                        </li>
                        <li className="flex items-center gap-2">
                            <AiFillInsurance />
                            <NavLink
                                className="hover:text-pink-700"
                                activeClassName="border-2 shadow"
                                to="AmericanCake"
                            >
                                Bánh Sachertorte Áo.
                            </NavLink>
                        </li>
                        <li className="flex items-center gap-2">
                            <AiFillMediumCircle />
                            <NavLink
                                className="hover:text-pink-700"
                                activeClassName="border-2 shadow"
                                to="AmericanCake"
                            >
                                Bánh Pavlova Úc.
                            </NavLink>
                        </li>
                        <li className="flex items-center gap-2">
                            <AiFillSketchCircle />
                            <NavLink
                                className="hover:text-pink-700"
                                activeClassName="border-2 shadow"
                                to="AmericanCake"
                            >
                                Bánh Black Forest Đức.
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
            <button className="flex items-center gap-2 justify-center" onClick={toggleProductsHandler}>
                {moreProducts ? "Less Products..." : "More Products..."}
                {moreProducts ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </button>

            <h3 className="text-center uppercase p-0 bg-">Profiles</h3>
            <div className="profiles flex flex-col">
                <Link>Update avatar</Link>
                <Link>Update email</Link>
                <Link>Update username</Link>
                <Link>Change password</Link>
            </div>

        </div>
    );
};

export default Sidebar;
