import FONT_PRESETS from "@/app/utils/font-presets";
import Link from "next/link";

function Footer() {
    return <footer className="bg-cg-white gap-4 rounded-lg shadow-[-8px_6px_0px_-3px_#C8CFBB] border-1 border-primary grid grid-cols-[1fr_1fr_1fr_1fr] mt-4 bg-cg-white p-4">
        <div>
            <div className="flex items-center gap-2 mb-2">
                <svg width={30} height={30} className="fill-orange-2">
                    <use xlinkHref="/sprite.svg#logomark" />
                </svg>
                <Link href="/"><span className={`${FONT_PRESETS.montserrat_standard} text-2xl text-orange-1`}>Cookgether</span></Link>
            </div>
            <div className="flex items-center gap-3">
                <svg width={30} height={30}>
                    <use xlinkHref="/sprite.svg#facebook" />
                </svg>
                <svg width={30} height={30}>
                    <use xlinkHref="/sprite.svg#instagram" />
                </svg>
                <svg width={30} height={30}>
                    <use xlinkHref="/sprite.svg#twitter" />
                </svg>
            </div>
        </div>
        <div>
            <h5 className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Légal</h5>
            <ul className={`${FONT_PRESETS.montserrat_standard} text-primary/60`}>
                <li>
                    Notices Légales
                </li>
                <li>
                    Sitemap
                </li>
                <li>
                    FAQ
                </li>
                <li>
                    Termes & Conditions
                </li>
                <li>
                    Politique de confidentialité
                </li>
                <li>
                    @Cookgether {new Date().getFullYear()} - Tous droits réservés
                </li>
            </ul>
        </div>
        <div>
            <h5 className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Connectez-vous</h5>
            <ul className={`${FONT_PRESETS.montserrat_standard} text-primary/60`}>
                <li>
                    Flux RSS
                </li>
                <li>
                    X
                </li>
                <li>
                    Instagram
                </li>
                <li>
                    Facebook
                </li>
            </ul>
        </div>
        <div>
            <h5 className={`${FONT_PRESETS.montserrat_bold} text-primary`}>Abonnez-vous à notre newsletter</h5>
            <p className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Restez à jour avec nos recettes et astuces.</p>
            <div className="mt-2 flex">
                <input className={`${FONT_PRESETS.montserrat_standard} placeholder:text-primary/50 bg-orange-1/10 focus:bg-orange-1/50 rounded-full text-primary px-4 py-1 mr-4`} placeholder="Adresse email" />
                <button className={`${FONT_PRESETS.montserrat_standard} px-4 px-2 border-1 border-color-grey rounded-full text-primary`}>S'abonner</button>
            </div>
        </div>
    </footer>
};

export default Footer;
