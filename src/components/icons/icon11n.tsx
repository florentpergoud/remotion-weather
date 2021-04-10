import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon11n: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <path
                fill="#efefef"
                stroke="#efefef"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
            />
            <g>
                <path fill="#f4a71d" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
                <animate
                    attributeName="opacity"
                    dur="2s"
                    repeatCount="indefinite"
                    values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
                />
            </g>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <path
                fill="none"
                stroke="#e5e7eb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
            />
            <g>
                <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
                <animate
                    attributeName="opacity"
                    dur="2s"
                    repeatCount="indefinite"
                    values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
                />
            </g>
        </svg>
    );
};
