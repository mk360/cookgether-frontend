import FONT_PRESETS from "@/app/utils/font-presets";
import { WordCloud } from "@/components/recipe/word-cloud";
import Link from "next/link";
import StarRating from "@/components/recipe/star-rating";
import Step from "@/components/recettes/step";
import SushiButton from "@/components/common/sushi-button";
import { Fragment } from "react";

async function Recipe({ params }: { params: {recipe: string } }) {
    // await fetch("http://localhost:3636/recipes")
    return (
        <main>
            <section className="p-4">
                <div className="grid grid-cols-[1fr_1fr_1fr]">
                    <div>
                        <h1 className={`${FONT_PRESETS.agbalumo} text-primary text-6xl my-2`}>Rôti de poulet Ardéchois</h1>
                        <span className={`${FONT_PRESETS.montserrat_standard} text-3xl`}>par <Link href="/utilisateurs/Chtiletto"><span className="text-link">Chtiletto</span></Link></span>
                    </div>
                <div /><div className={`${FONT_PRESETS.montserrat_standard} text-primary text-2xl flex items-center justify-end`}>
                    Libanais, Français, Traditionnel, Plat principal
                    {/* TODO : rediriger vers la page de résultats de recherche, avec la catégorie
                    cliquée comme critère */}
                </div>
                </div>
                <div className="m-auto grid grid-cols-[2fr_1fr] gap-x-2 gap-y-1 grid-rows-[1fr_1fr] p-8 w-8/10">
                    <div style={{ gridArea: "1 / 1 / 3 / 2" }}>
                        <img alt="" src="/placeholder.png" />
                    </div>
                    <div className="p-4" style={{ gridArea: "1 / 2 / 2 / 3" }}>
                        <img alt="" src="/placeholder.png" />
                    </div>
                    <div className="p-4" style={{ gridArea: "2 / 2 / 2 / 3" }}>
                        <img alt="" src="/placeholder.png" />
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_1fr]">
                    {/* Titres de sections */}
                    <h3 className={`text-center ${FONT_PRESETS.montserrat_bold} text-3xl my-2`}>Note globale</h3>
                    <h3 className={`text-center ${FONT_PRESETS.montserrat_bold} text-3xl`}>Saveurs</h3>
                    <h3 className={`text-center ${FONT_PRESETS.montserrat_bold} text-3xl`}>Temps total</h3>
                    <h3 className={`text-center ${FONT_PRESETS.montserrat_bold} text-3xl`}>Budget</h3>
                    {/* Note globale */}
                    <div className="text-center"><span className={`text-green-2 text-4xl`}>
                        7.8
                    </span><span className="text-2xl">/10</span>
                        <div className="flex justify-center mt-1">
                           <StarRating grade={1} />
                        </div>
                    </div>
                        <WordCloud words={[
    { word: "React", weight: 95 },
    { word: "JavaScript", weight: 88 },
    { word: "NextJS", weight: 75 },
    { word: "TypeScript", weight: 70 },
    { word: "HTML", weight: 65 },
    { word: "CSS", weight: 60 },
    { word: "Node.js", weight: 55 },
    { word: "API", weight: 50 },
    { word: "Database", weight: 45 },
    { word: "Frontend", weight: 42 },
    { word: "Backend", weight: 38 },
    { word: "Component", weight: 35 },
    { word: "Hook", weight: 32 },
    { word: "State", weight: 30 },
    { word: "Props", weight: 28 },
    { word: "Router", weight: 25 },
    { word: "Styling", weight: 22 },
    { word: "Performance", weight: 20 },
    { word: "Testing", weight: 18 },
    { word: "Deployment", weight: 15 },
    { word: "Optimization", weight: 12 },
    { word: "Debug", weight: 10 },
    { word: "Build", weight: 8 },
    { word: "Package", weight: 5 },
  ].slice(0, 0)} />
                <div className="text-2xl text-center">
                    70 min
                </div>
                <div className="text-center">
                    {[1, 2, 3, 4, 5].map((rating) => {
                        const costRating = 3 // dummy
                        return <span key={rating} className={(rating <= costRating ? "text-primary" : "text-primary/20") + " text-2xl"}>
                            €
                        </span>
                    })}
                 </div>
                </div>
            </section>
            <section className="relative flex justify-between gap-4 mb-2">
                <div className="p-2 border-1 border-primary rounded-lg flex-1">
                    <h2 className={FONT_PRESETS.agbalumo + " text-4xl mb-4"}>Ingrédients</h2>
                    <ul className={FONT_PRESETS.montserrat_standard}>
                        <li className="flex gap-2 items-center mb-2">
                            <div className="rounded-lg bg-grey w-10 h-10" />
                            3 kilos de sucre
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="rounded-lg bg-grey w-10 h-10" />
                            3 kilos de sucre
                        </li>
                    </ul>
                </div>
                <div className="p-2 border-1 border-primary rounded-lg flex-1 text-end">
                    <h2 className={FONT_PRESETS.agbalumo + " text-4xl mb-2"}>Ustensiles</h2>
                    <div className={"grid gap-y-2 grid-cols-[1fr_1fr] " + FONT_PRESETS.montserrat_standard}>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                        <span>Four à micro-ondes</span>
                    </div>
                </div>
                <div className="absolute w-full h-full flex justify-center items-start pt-2">
                    <div className={"bg-green-1 border-1 border-primary px-4 py-1 rounded-lg flex items-center justify-between gap-5 " + FONT_PRESETS.montserrat_standard}>
                        <button className="px-1 text-4xl">-</button>
                        <span className="text-2xl">1 personne</span>
                        <button className="px-1 text-4xl">+</button>
                    </div>
                </div>
            </section>
            <section className="mb-2">
                <h2 className={`text-4xl mb-2 ${FONT_PRESETS.agbalumo}`}>Étapes</h2>
                <div className={`flex mb-2 gap-2 ${FONT_PRESETS.montserrat_standard} items-center`}>
                    <svg width={30} height={30} className="fill-orange-1">
                        <use href="/sprite.svg#info-circle" />
                    </svg>
                    <span className="text-orange-2">Cette étape peut être réalisée en même temps que d'autres.</span>
                </div>
                <div className="flex flex-col gap-y-2">
                    {[{ content: "Mettre l'Israélien dans le four", parallel: true }, { content: "Préparer la sauce harissa.", parallel: true }, { content: "Allumer le feu.", parallel: false }].map((step, i) => {
                        return <Fragment key={step.content}><Step content={step.content} index={i + 1} key={step.content} canBeParallel={step.parallel} />
                        {i !== 2 && (
                            <hr className="border-0.5 mx-2 border-primary" />
                        )}
                        </Fragment>
                    })}
                </div>
            </section>
            <section className="flex justify-around">
                <SushiButton sushi content="Évaluer la recette" theme="black" type="button" />
                <SushiButton content="Alternatives" theme="salmon" type="link" href="" />
            </section>
        </main>
    )
};

export default Recipe;
