import schema from "./schema"
import Icon from "./Icon"

export default function FooterSection() {

    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="mt-8 flex justify-center space-x-6">
                    {schema.socials.map(social => {

                        return (
                            <a href={social.url} target="_blank" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{social.name}</span>
                                <Icon type={social.icon} className="w-6 h-6" />
                            </a>
                        )
                    })}
                </div>
                <div className="mt-8 justify-center flex items-center">
                    <img
                        className="h-5 w-auto sm:h-8"
                        src="https://avatars2.githubusercontent.com/u/66509471?s=200&v=4"
                        alt=""
                    />
                    <div className="ml-2 font-bold">
                        Sublayer <span className="font-light tracking-wide">Pool</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}