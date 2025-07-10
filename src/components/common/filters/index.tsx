"use client";

import FONT_PRESETS from "@/app/utils/font-presets";
import { useState } from "react";

interface FiltersState {
    grade: 1 | 2 | 3 | 4 | 5;
    budget: 1 | 2 | 3;
    maxPrepTime: number;
    maxTotalTime: number;
    localFood: boolean;
    nativeFood: boolean;
    seasonalFood: boolean;
    similarTo: string;
    pairsWellWith: string;
    tagsSearchQuery: string;
    includeTags: {
        [tag: string]: boolean;
    };
    minNutrientRatio: 1 | 2 | 3 | 4 | 5;
    nutrientsSearchQuery: string;
    includeNutrients: {
        [nutrient: string]: 1 | 2 | 3 | 4 | 5;
    }
}

function Filters() {
    const [filtersState, setFiltersState] = useState<FiltersState>({
        grade: 1,
        maxPrepTime: 0,
        maxTotalTime: 0,
        seasonalFood: false,
        localFood: false,
        nativeFood: false,
        nutrientsSearchQuery: "",
        tagsSearchQuery: "",
        similarTo: "",
        includeNutrients: {},
        minNutrientRatio: 1,
        includeTags: {},
        budget: 1,
        pairsWellWith: "",
    });
    const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);

    return (
        <form className={`${FONT_PRESETS.montserrat_standard} grid grid-cols-[1fr_1fr] gap-x-4 p-2`} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="w-full">
                <label htmlFor="grade">
                    Note
                </label>
                
            </div>
        </form>
    )
};

function Checkbox({ checked, name }: { checked: boolean; name: string }) {
    return (
        <>
            <input type="checkbox" className="hide" id={name} />
            <label htmlFor={name} className="p-4 rounded-lg bg-cg-white block border-primary border-1">
                {checked ? (
                    <></>
                ) : (<></>)}
            </label>
        </>
    )
};

export default Filters;

