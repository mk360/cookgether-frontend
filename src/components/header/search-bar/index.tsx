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
                    <button className="sushi cursor-pointer p-4 border-2 border-primary bg-primary text-cg-white rounded-lg rounded-tl-none rounded-bl-none"></button>
                </div>
                <button className="shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)] cursor-pointer bg-grey p-2 rounded-lg border-primary border-1">
                    Test
                </button>
                <button className="shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)] cursor-pointer bg-grey p-2 rounded-lg border-primary border-1">
                    Test
                </button>
            </div>
            <div></div>
            <div></div>
            <div className="flex gap-2">{tags.map((tag) => {
                return <button className={`cursor-pointer bg-orange-1 p-2 ${FONT_PRESETS.montserrat_standard} text-primary rounded-lg`} onClick={() => {
                    const newState = tags.filter((curTag) => curTag !== tag);
                    setTags(newState);
                }} key={tag}>
                        {/* icône de suppr */}
                    {tag}</button>
            })}</div>
        </>
    )
};

export default SearchBar;
