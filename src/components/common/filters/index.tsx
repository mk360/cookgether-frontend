"use client";

import FONT_PRESETS from "@/app/utils/font-presets";
import StarRating from "@/components/recipe/star-rating";
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
        <form className={`${FONT_PRESETS.montserrat_standard}`} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="grid grid-cols-[1fr_1fr] gap-x-4">
                <div className="grid grid-cols-[1fr] gap-y-2">
                    <div className="flex justify-between items-center">
                        <span>Note</span>
                        <div>
                            <StarRating grade={filtersState.grade} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Budget</span>
                        <span>€€€€€</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Temps total max</span>
                        <select className="bg-cg-white border-1 border-primary p-1 rounded-lg px-2" onChange={(e) => {
                            setFiltersState({
                                ...filtersState,
                                maxTotalTime: +e.target.value,
                            });
                        }} value={filtersState.maxTotalTime}>
                            <option></option>
                            <option value={12}>12h</option>
                            <option value={6}>6h</option>
                            <option value={3}>3h</option>
                            <option value={1}>1h</option>
                        </select> 
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Temps de préparation max</span>
                        <select className="bg-cg-white border-1 border-primary p-1 rounded-lg px-2" onChange={(e) => {
                            setFiltersState({
                                ...filtersState,
                                maxPrepTime: +e.target.value,
                            });
                        }} value={filtersState.maxPrepTime}>
                            <option></option>
                            <option value={12}>12h</option>
                            <option value={6}>6h</option>
                            <option value={3}>3h</option>
                            <option value={1}>1h</option>
                        </select> 
                    </div>
                    <div className="flex justify-between">
                        <Checkbox onChange={(newState) => {
                            setFiltersState({
                                ...filtersState,
                                localFood: newState,
                            })
                        }} checked={filtersState.localFood} name="Privilégier les ingrédients locaux" />
                    </div>
                    <div className="flex justify-between">
                        <Checkbox onChange={(newState) => {
                            setFiltersState({
                                ...filtersState,
                                nativeFood: newState,
                            });
                        }} checked={filtersState.nativeFood} name="Priviégier les ingrédients natifs" />
                    </div>
                    <div className="flex justify-between">
                        <Checkbox onChange={(newState) => {
                            setFiltersState({
                                ...filtersState,
                                seasonalFood: newState,
                            });
                        }} checked={filtersState.seasonalFood} name="Priviégier les ingrédients de saison" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Similaire à</span>
                        <select className="bg-cg-white border-1 border-primary p-1 rounded-lg px-2" onChange={(e) => {
                            setFiltersState({
                                ...filtersState,
                                maxPrepTime: +e.target.value,
                            });
                        }} value={filtersState.maxPrepTime}>
                            <option></option>
                            <option value={12}>12h</option>
                            <option value={6}>6h</option>
                            <option value={3}>3h</option>
                            <option value={1}>1h</option>
                        </select> 
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tags-search">Tags</label>
                    <div className="flex">
                        <input onChange={(e) => {
                            const { value } = e.target;
                            setFiltersState({
                                ...filtersState,
                                tagsSearchQuery: value,
                            })
                        }} value={filtersState.tagsSearchQuery} className={`placeholder-primary placeholder-opacity-25 px-4 border-2 rounded-lg rounded-tr-none rounded-br-none bg-grey flex-1 p-2 ${FONT_PRESETS.montserrat_standard}`} id="tags-search" placeholder="Rechercher un tag..." />
                        <button className="p-2 sushi cursor-pointer p-1 border-2 border-primary bg-primary text-cg-white rounded-lg rounded-tl-none rounded-bl-none">
                            <svg className="fill-cg-white" width={24} height={24} viewBox="0 0 24 24">
                                <use href="/sprite.svg#search" />
                            </svg>
                        </button>
                    </div>
                    {Object.entries(filtersState.includeTags).map(([tag, value]) => (
                        <div className="flex" key={`${tag}-${value}`}>
                            <Checkbox onChange={(newState) => {
                                setFiltersState({
                                    ...filtersState,
                                    includeTags: {
                                        ...filtersState.includeTags,
                                        [tag]: newState
                                    }
                                });
                            }} checked={filtersState.includeTags[tag]} name={tag} />
                        </div>
                    ))}
                    <div className="flex items-center justify-between">
                        <span>Se marie bien avec</span>
                        <select className="bg-cg-white border-1 border-primary p-1 rounded-lg px-2">
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="flex gap-2 flex" onClick={() => {
                    setShowAdditionalFilters(!showAdditionalFilters);
                }}><span className={showAdditionalFilters ? "block transform rotate-90" : ""}>{">"}</span>
                    Filtres additionnels
                </button>
            </div>
            <hr className="border-1 border-primary" />
            <div className="grid grid-cols-[1fr_1fr]">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <span>Densité nutritionnelle min.</span>
                        <div>
                            <StarRating grade={10} />
                        </div>
                    </div>
                     <label htmlFor="nutrients-search">Tags</label>
                    <div className="flex">
                        <input onChange={(e) => {
                            const { value } = e.target;
                            setFiltersState({
                                ...filtersState,
                                tagsSearchQuery: value,
                            })
                        }} value={filtersState.tagsSearchQuery} className={`placeholder-primary placeholder-opacity-25 px-4 border-2 rounded-lg rounded-tr-none rounded-br-none bg-grey flex-1 p-2 ${FONT_PRESETS.montserrat_standard}`} id="nutrients-search" placeholder="Rechercher des nutriments..." />
                        <button className="p-2 sushi cursor-pointer p-1 border-2 border-primary bg-primary text-cg-white rounded-lg rounded-tl-none rounded-bl-none">
                            <svg className="fill-cg-white" width={24} height={24} viewBox="0 0 24 24">
                                <use href="/sprite.svg#search" />
                            </svg>
                        </button>
                    </div>
                    {Object.entries(filtersState.includeNutrients).map(([tag, value]) => (
                        <div className="flex" key={`${tag}-${value}`}>
                            <Checkbox onChange={(newState) => {
                                setFiltersState({
                                    ...filtersState,
                                    includeTags: {
                                        ...filtersState.includeTags,
                                        [tag]: newState
                                    }
                                });
                            }} checked={filtersState.includeTags[tag]} name={tag} />
                        </div>
                    ))}
                </div>
            </div>
        </form>
    )
};

function Checkbox({ checked, name, onChange }: { checked: boolean; name: string; onChange(newState: boolean): void }) {
    return (
        <>
            <label>{name}</label>
            <input type="checkbox" onChange={(e) => {
                onChange(e.target.checked);
            }} className="hidden" id={name} />
            <label htmlFor={name} className="p-1 rounded-lg bg-cg-white block border-primary border-1 w-fit h-fit cursor-pointer">
                <svg width={20} height={20}>
                    <use href={`/sprite.svg#checkbox-${checked ? "tick" : "cross"}`} />
                </svg>
            </label>
        </>
    )
};

export default Filters;

