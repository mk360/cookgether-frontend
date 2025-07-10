import SushiButton from "@/components/common/sushi-button";
import "./style.css";
import FONT_PRESETS from "../utils/font-presets";
import ResultCard from "@/components/recherche/result-card";

async function Recherche({ params }: { params: {recipe: string } }) {
    return <>
        <div className="grid grid-cols-[3fr_1fr] grid-rows-[1fr_200px] gap-4">
            <div className="flex justify-between items-center">
                <h2 className={`${FONT_PRESETS.agbalumo} text-3xl`}>75 résultats</h2>
                <SushiButton theme="white" type="button" content="Tri ⇅" />
            </div>
            <div className="glossary bg-green-1 border-1 border-primary rounded-lg p-4">
                <h3 className={`${FONT_PRESETS.montserrat_bold} text-2xl`}>Glossaire</h3>
                <div className={`grid grid-cols-[1fr_5fr] gap-x-2 ${FONT_PRESETS.montserrat_standard}`}>
                    <svg></svg>
                    <span>Halal</span>
                </div>
            </div>
            <div />
            <div>
                <hr className="border-0.5 border-primary" />
                <ResultCard />
            </div>
            <div>
                <hr className="border-0.5 border-primary" />
                <ResultCard />
            </div>
            <div>
                <hr className="border-0.5 border-primary" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className={`${FONT_PRESETS.montserrat_bold} text-3xl my-4 mx-auto`}>Vous ne trouvez pas ce que vous recherchez ?</h2>
                <div className="mx-auto"><SushiButton content="Créez votre recette gratuitement" className="mx-auto" sushi type="link" theme="black" href="/nouvelle" /></div>
            </div>
            <div />
            <div className="flex justify-center gap-4 text-xl">
                {[1, 2, 3, 4].map((i) => {
                    return <button key={i} className={FONT_PRESETS.montserrat_bold}>{i}</button>
                })}
            </div>
        </div>
    </>
};


export default Recherche;
