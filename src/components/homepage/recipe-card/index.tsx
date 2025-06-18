import FONT_PRESETS from "@/app/utils/font-presets";

function RecipeCard({ name, category, date }: { name: string; category?: string; date: string }) {
    // todo : regarder s'il n'y a pas plus sémantique que le <div>. Regarder le <article> peut-être ?
    return (
        <figure>
          <img alt='' src="/placeholder.png" className='w-full h-xl mb-4' />
          <figcaption className={`${FONT_PRESETS.agbalumo} text-3xl mb-2 text-primary drop-shadow-[0_-4px_0px_#F1F1F1]`}>{name}</figcaption>
          <p className={`text-2xl ${FONT_PRESETS.montserrat_bold} text-orange-1`}>{category}</p>
          <p className={`text-2xl ${FONT_PRESETS.montserrat_standard} text-grey`}>{date}</p>
        </figure>
    )
};

export default RecipeCard;
