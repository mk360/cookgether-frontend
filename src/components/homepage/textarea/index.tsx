"use client";

import FONT_PRESETS from "@/app/utils/font-presets";

// todo: jarter et remplacer par une section standard
function Textarea() {
    return <textarea rows={2} className={`resize-none shadow-[-8px_6px_0px_-3px_#C8CFBB] text-2xl w-full text-primary block placeholder-primary placeholder:opacity-50 px-4 pr-8 border-2 rounded-lg bg-cg-white ${FONT_PRESETS.montserrat_standard}`} placeholder="Découvrez des recettes délicieuses, et partagez vos propres créations culinaires" />;
};

export default Textarea;
