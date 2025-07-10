"use client";

import FONT_PRESETS from "@/app/utils/font-presets";
import SushiButton from "@/components/common/sushi-button";
import Link from "next/link";
import { useState } from "react";

function Commentaire({ content, user }: { content: string, user: {
    imageUrl: string;
    name: string;
    url: string;
} }) {
    const [reportContent, setReportContent] = useState("");
    const [displayReport, setDisplayReport] = useState(false);

    return <>
        <div className="my-4 grid grid-cols-[100px_auto_100px] gap-x-4">
            <img loading="lazy" className="h-400px w-400px bg-grey" src={user.imageUrl} />
            <div className={FONT_PRESETS.montserrat_standard}>
                <h3><Link href={user.url} className="text-2xl"><span className="text-link">{user.name}</span></Link></h3>
                <p>{content}</p>
            </div>
            <button title="Signaler le commentaire" className="flex justify-center items-center" onClick={() => {
                setDisplayReport(!displayReport);
            }}>
                <svg aria-label="Signaler ce commentaire" width={30} height={30}>
                    <use href="/sprite.svg#report" />
                </svg>
            </button>
        </div>
        {displayReport && (
            <div>
                <h2 className={`${FONT_PRESETS.montserrat_bold} text-2xl my-4`}>Pourquoi voulez-vous signaler ce commentaire ?</h2>
                <textarea name="report-reason" className="border-1 resize-none rounded-lg border-primary bg-cg-white caret-primary mb-4 p-2 w-2/5 h-2/5" value={reportContent} onChange={(e) => {
                    setReportContent(e.target.value);
                }}></textarea>
                <div className="flex gap-4">
                    <SushiButton type="button" content="Soumettre" sushi theme="black" onClick={() => {
                        alert(reportContent);
                    }} />
                    <SushiButton type="button" content="Annuler" sushi theme="white" onClick={() =>{
                        setDisplayReport(false);
                        setReportContent("");
                    }} />
                </div>
            </div>
        )}
    </>
};

export default Commentaire;
