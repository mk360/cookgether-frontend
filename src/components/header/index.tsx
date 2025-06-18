import FONT_PRESETS from "@/app/utils/font-presets";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";

function Header() {
    return <header className="bg-cg-white text-primary grid grid-rows-[1fr 2fr] gap-4 rounded-lg shadow-[-8px_6px_0px_-3px_#C8CFBB] border-1 border-primary">
        <div className="flex justify-between border-b-1 border-primary px-4">
            <Link className="flex items-center gap-2" href="/">
                <Image alt="" src={"/Logo.png"} height={72} width={72} />
                <span className={`${FONT_PRESETS.agbalumo} text-3xl`}>Cookgether</span>
            </Link>
            <nav className="h-full">
                <ul className={`flex ${FONT_PRESETS.montserrat_standard} items-center h-full gap-4`}>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/recherche">Rechercher une recette</Link></li>
                    {/* <li>Ustensiles</li> */}
                    <li><Link href="/recettes">Mes Recettes</Link></li>
                </ul>
            </nav>
            <div className="flex items-center justify-around gap-4">
                <Link className={FONT_PRESETS.montserrat_bold} href="/recettes/nouvelle">Publier une recette</Link>
                <Link className={`${FONT_PRESETS.montserrat_bold} sushi bg-primary p-2 rounded-lg transform skew-x-15 shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)] cursor-pointer`} href="/recettes/nouvelle">
                    <span className="text-cg-white block transform -skew-x-15">Connexion</span>
                </Link>
            </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr_1fr] grid-rows-2 gap-4 p-2">
            {/* <div  */}
            <div />
            <SearchBar />
        </div>
    </header>
};

export default Header;
