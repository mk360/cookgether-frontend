"use client";

import FONT_PRESETS from "@/app/utils/font-presets";
import { useState } from "react";

function SearchBar() {
    const [tags, setTags] = useState<string[]>(["Veggie", "Halal"]);

    return (
        <>
            <div className="flex gap-4 items-center">
                <div style={{ flex: 1 }} className="flex h-full">
                    <input style={{ flex: 1 }} className={`placeholder-primary placeholder-opacity-25 px-4 border-2 rounded-lg rounded-tr-none rounded-br-none bg-grey w-auto h-full ${FONT_PRESETS.montserrat_standard}`} placeholder="Rechercher une recette..." />
                    <button className="sushi cursor-pointer p-1 border-2 border-primary bg-primary text-cg-white rounded-lg rounded-tl-none rounded-bl-none">
                        <svg className="fill-cg-white" width={24} height={24} viewBox="0 0 1 1">
                            <use href="/sprite-2.svg#search" />
                        </svg>
                    </button>
                </div>
                <button className="skew-x-15 shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)] cursor-pointer bg-grey p-2 rounded-lg border-primary border-1">
                    <span className="block -skew-x-15">Test</span>
                </button>
                <button className="skew-x-15 shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)] cursor-pointer bg-grey p-2 rounded-lg border-primary border-1">
                    <span className="block -skew-x-15">Test</span>
                </button>
            </div>
            <div></div>
            <div></div>
            <div className="flex gap-2">{tags.map((tag) => {
                return <button className={`transform grid skew-x-15 cursor-pointer bg-orange-1 p-2 ${FONT_PRESETS.montserrat_standard} text-primary rounded-lg`} onClick={() => {
                    const newState = tags.filter((curTag) => curTag !== tag);
                    setTags(newState);
                }} key={tag}>
                    <div className="transform flex gap-1 -skew-x-15">
                         <svg className="fill-cg-white" width={24} height={24} viewBox="0 0 1 1">
                            <use href="/sprite.svg#cross" />
                        </svg>
                        {tag}
                    </div></button>
            })}</div>
        </>
    )
};

export default SearchBar;
