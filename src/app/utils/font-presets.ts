import { Agbalumo, Montserrat_Alternates } from "next/font/google";

const MONTSERRAT_EXTRA_BOLD = Montserrat_Alternates({
    subsets: ["latin-ext"],
    weight: ["800"]
});

const MONTSERRAT_STANDARD = Montserrat_Alternates({
    subsets: ["latin-ext"],
    weight: ["500"]
})

const AGBALUMO_MAIN = Agbalumo({
    subsets: ["latin-ext"],
    weight: ["400"]
});


const FONT_PRESETS = {
    "montserrat_bold": MONTSERRAT_EXTRA_BOLD.className,
    "montserrat_standard": MONTSERRAT_STANDARD.className,
    "agbalumo": AGBALUMO_MAIN.className,
};

export default FONT_PRESETS;
