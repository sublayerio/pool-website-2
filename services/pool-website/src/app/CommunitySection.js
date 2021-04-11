import schema from "./schema"

export default function CommunitySection() {

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Community</h2>
                        <p className="text-xl text-gray-500">
                            {schema.community.description}
                        </p>
                    </div>
                    <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                        {schema.community.pools.map(pool => {

                            return (
                                <li>
                                    <div className="space-y-4">
                                        <div className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 bg-center bg-cover shadow border border-gray-200" style={{ backgroundImage: `url(${pool.image})` }} />
                                        <div className="space-y-2">
                                            <div className="text-xs font-medium lg:text-sm">
                                                <h3>{pool.name}</h3>
                                                <a className="text-red-600" href={pool.url}>{pool.url.split("https://").join("")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}