import FONT_PRESETS from "@/app/utils/font-presets";

function ResultCard() {
    return <div className="p-2 grid h-full grid-cols-[1fr_3fr] gap-2">
        <img loading="lazy" src="/placeholder.png" className="flex-1 h-full" />
        <div className="flex-3 flex flex-col justify-between">
            <div className="flex items-center">
                <h3 className={FONT_PRESETS.montserrat_bold}>LE tiramisu chocolat-spéculoos</h3>
                <div className="flex gap-2">
                    <svg width={30} height={30}>
                    </svg>
                    <svg width={30} height={30}>
                    </svg>
                </div>
            </div>
            <p className={FONT_PRESETS.montserrat_standard}>C'est la meilleure recette de tiramisu ever !!! Avec ça, même ton ex reviendra vers toi !!!</p>
            <div className="flex justify-between">
                <div className="text-2xl">€€€€€</div>
                <div>
                    {/* svg anticipation */}
                    {/* svg préparation */}
                    {/* svg repos / couisson */}
                </div>
            </div>
        </div>
    </div>
};

export default ResultCard;
