import sample from 'lodash/sample'
import { useEffect, useState } from 'react';

const missions = [
    { title: "Decentralizing", subtitle: "Cardano" },
    { title: "Creating", subtitle: "educational content" },
    { title: "Encouraging", subtitle: "others" },
    { title: "Supporting", subtitle: "single stake pools" },
    { title: "Sharing", subtitle: "knowledge" },
]

export default function HeroSection() {

    const [mission, setMission] = useState(
        sample(missions)
    )

    useEffect(() => {

        const interval = setInterval(() => {
            setMission(sample(
                missions.filter(m => mission.title !== m.title)
            ))
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="relative bg-gray-900 overflow-hidden pt-16 pb-16 sm:pb-24">
            <div
                className="hidden sm:block sm:absolute sm:inset-0"
                aria-hidden="true"
            >
                <svg
                    className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect
                        width={364}
                        height={384}
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left lg:flex lg:items-center">
                        <div>
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                <span className="block">
                                    {mission.title}
                                </span>
                                <span className="text-primary-600">{mission.subtitle}</span>
                            </h1>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Let's achieve these goals by working together as a community. Don't hesitate to contact me and ask questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
