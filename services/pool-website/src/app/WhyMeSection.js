import Icon from "./Icon"
import schema from "./schema"

function SpecsSection() {

    return (
        <div className="relative bg-gray-50 py-12">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">Why Me</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    3 Reasons
    </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    My goal is to help decentralize the Cardano network by being an independent stake pool operator running a single stake pool and help others to do the same.
    </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {schema.usps.items.map(usp => {

                            return (
                                <div className="pt-6">
                                    <div className="flow-root bg-white shadow rounded-lg px-6 pb-8 h-full flex-col">
                                        <div className="-mt-6 flex-grow">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-red-500 text-white rounded-md shadow-lg">
                                                    <Icon type={usp.icon} className="h-6" />
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{usp.name}</h3>
                                            <p className="mt-5 text-base text-gray-500">
                                                {usp.description}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-red-600 underline text-xs">
                                                Why is this important?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SpecsSection