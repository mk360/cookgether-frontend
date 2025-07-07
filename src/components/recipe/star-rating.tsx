export default function StarRating({ grade }: { grade: number }) {
    const stars = [];
    const fullStars = Math.floor(grade / 2);
    const halfStar = grade % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const Star = ({ fill = "#FFD700" }: { fill?: string }) => (
        <svg width={38} height={38} viewBox="0 0 40 40">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-903.000000, -411.000000)" fill={fill}>
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                        <g id="star" transform="translate(858.000000, 234.000000)">
                            <g transform="translate(7.000000, 8.000000)" id="Shape">
                                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const HalfStar = () => (
        <svg width={38} height={38} viewBox="0 0 40 40">
            <defs>
                <linearGradient id="half-grad">
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#fff" />
                </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-903.000000, -411.000000)" fill="url(#half-grad)">
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                        <g id="star" transform="translate(858.000000, 234.000000)">
                            <g transform="translate(7.000000, 8.000000)" id="Shape">
                                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`star-full-${i}`} />);
    }
    if (halfStar) {
        stars.push(<HalfStar key="star-half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`star-empty-${i}`} fill="#fff" />);
    }

    return <div className="flex justify-center mt-1">{stars}</div>;
}