import FONT_PRESETS from "@/app/utils/font-presets";
import Link from "next/link";

function Footer() {
    return <footer className="grid grid-cols-[2fr_1fr_1fr_1fr] mt-4 bg-cg-white p-4">
        <div>
            <Link href="/"><span className={`${FONT_PRESETS.montserrat_standard} text-2xl text-orange-1`}>Cookgether</span></Link>
        </div>
        <div>
            <h5 className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Legal</h5>
            <ul className={`${FONT_PRESETS.montserrat_standard} text-primary/60`}>
                <li>
                    Legal Notices
                </li>
                <li>
                    Sitemap
                </li>
                <li>
                    FAQ
                </li>
                <li>
                    Terms of Use
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    @Cookgether {new Date().getFullYear()} - All Rights Reserved
                </li>
            </ul>
        </div>
        <div>
            <h5 className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Connect</h5>
            <ul className={`${FONT_PRESETS.montserrat_standard} text-primary/60`}>
                <li>
                    RSS Feed
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
            <h5 className={`${FONT_PRESETS.montserrat_bold} text-primary`}>Subscribe to our Newsletter</h5>
            <p className={`${FONT_PRESETS.montserrat_standard} text-primary`}>Stay updated with the latest recipes and tips.</p>
            <div className="mt-2 flex">
                <input className={`${FONT_PRESETS.montserrat_standard} placeholder:text-primary/50 bg-orange-1/10 focus:bg-orange-1/50 rounded-full text-primary px-4 py-1 mr-4`} placeholder="Email address" />
                <button className={`${FONT_PRESETS.montserrat_standard} px-4 px-2 border-1 border-color-grey rounded-full text-primary`}>Subscribe</button>
            </div>
        </div>
    </footer>
};

export default Footer;
