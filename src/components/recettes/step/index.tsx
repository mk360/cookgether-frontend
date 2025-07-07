import FONT_PRESETS from "@/app/utils/font-presets";

function Step({ content, canBeParallel, index }: { content: string; canBeParallel: boolean, index: number }) {
    // premier style

    // return <div className={`border-1 bg-gradient-to-r from-beige-1 to-green-1 rounded-lg grid grid-cols-[3rem_auto_3rem] items-center px-4 ${FONT_PRESETS.montserrat_standard}`}>
    //     <span className="text-3xl text-orange-1">{index}.</span>
    //     <span>{content}</span>
    //     {canBeParallel && (
    //         <svg width={40} height={40} className="fill-orange-1">
    //             <use href="/sprite.svg#info-circle" />
    //         </svg>
    //     )}
    // </div>

    // deuxième style
    return <div className={`py-1 grid grid-cols-[3rem_auto_3rem] items-center px-4 ${FONT_PRESETS.montserrat_standard}`}>
        <span className="text-3xl text-orange-1">{index}.</span>
         <span>{content}</span>
        {canBeParallel && (
            <svg width={40} height={40} className="stroke-primary fill-transparent">
                <use href="/sprite.svg#info-circle" />
            </svg>
        )}
    </div>
};

export default Step;
