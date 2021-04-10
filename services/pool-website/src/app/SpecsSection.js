import schema from "./schema"
import Icon from "./Icon"

function SpecsSection() {

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">Technology</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Specifications
      </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Running my stake pool from home on a cluster of Raspberry Pi's
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <div>
                        {schema.specifications.map(specification => {

                            return (
                                <div className="flex items-center py-2">
                                    <div className="mr-2">
                                        <Icon type={specification.icon} className="h-6" />
                                    </div>
                                    <div>
                                        {specification.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16 space-y-4 flex flex-col items-center">
                    <div className="flex justify-center space-x-4">
                        <div className="bg-cover bg-center w-24 h-24 md:w-40 md:h-40 rounded-lg shadow" style={{ backgroundImage: `url(/setup1.webp)` }} />
                        <div className="bg-cover bg-center w-24 h-24 md:w-40 md:h-40 rounded-lg shadow" style={{ backgroundImage: `url(/setup2.webp)` }} />
                        <div className="bg-cover bg-center w-24 h-24 md:w-40 md:h-40 rounded-lg shadow" style={{ backgroundImage: `url(/setup3.webp)` }} />
                    </div>
                    <div className="text-gray-500 text-xs">
                        Pictures taken while setting up for the first time
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpecsSection