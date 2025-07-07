import FONT_PRESETS from "@/app/utils/font-presets";
import Link from "next/link";
import { HTMLProps, ReactNode } from "react";

type ButtonTheme = "black" | "no-bg" | "salmon" | "white";

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    type: "link";
    href: string;
};

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type: "button";
};

type SushiButtonProps = (ButtonProps | LinkProps) & {
    theme: ButtonTheme;
    content: string;
    sushi?: true;
}

function SushiButton(props: SushiButtonProps) {
    const { className, type, sushi } = props;
    const containerClasses = [FONT_PRESETS.montserrat_bold, "rounded-lg", "p-2", "transform", "skew-x-15", "shadow-[-4px_4px_0_0px_rgba(0,0,0,0.25)]", "cursor-pointer", "block"];
    const textClasses = ["transform", "block", "-skew-x-15"];
    if (className) containerClasses.push(className);
    const themeClasses = getThemeClasses(props.theme);
    containerClasses.push(themeClasses.button);
    textClasses.push(themeClasses.text);

    if (sushi) {
        containerClasses.push("sushi");
    }

    if (type === "button") {
        const { type, content, ...otherProps } = props;
        return <button {...otherProps} className={containerClasses.join(" ")}>
            <span className={textClasses.join(" ")}>{content}</span>
        </button>
    }

    return <Link href={props.href} className={containerClasses.join(" ")}>
        <span className={textClasses.join(" ")}>{props.content}</span>
    </Link>;
};

function getThemeClasses(theme: ButtonTheme) {
    switch (theme) {
        case "black": return {
            button: "bg-primary",
            text: "text-cg-white"
        };
        case "salmon": return {
            button: "bg-orange-1",
            text: "text-primary"
        };
        case "no-bg": return {
            button: "",
            text: "text-primary"
        };

        case "white": return {
            button: "bg-cg-white",
            text: "text-primary"
        };
    }
}

export default SushiButton;
