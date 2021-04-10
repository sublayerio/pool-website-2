import Layout from "./Layout"

function Button({ image, name, href }) {

    return (
        <a href={href} target="_blank" className="border border-gray-200 rounded-lg shadow p-4 inline-block focus:ring-2 focus:ring-primary-600">
            <div className="bg-contain bg-center bg-no-repeat w-16 h-16 m-2" style={{ backgroundImage: `url(${image})` }} />
            <div className="font-bold">
                {name}
            </div>
        </a>
    )
}

export default function DelegatePage() {

    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <h1 className="text-3xl leading-8 font-extrabold">How To Delegate</h1>
                <div className="space-y-10 mt-10">
                    <div className="space-y-4">
                        <h2 className="font-bold text-lg">1. Buy ADA on an exchange</h2>
                        <div className="space-x-4">
                            <Button image="/binance.svg" name="Binance" href="https://binance.com" />
                            <Button image="/kraken.svg" name="Kraken" href="https://kraken.com" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-lg">2. Transfer your ADA to a wallet</h2>
                        <div className="space-x-4">
                            <Button image="/daedalus.svg" name="Daedalus" href="https://daedaluswallet.io" />
                            <Button image="/yoroi.svg" name="Yoroi" href="https://yoroi-wallet.com" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-lg">3. Go to staking / delegation center</h2>
                        <p className="text-gray-500">Search for my pool, select delegate and choose the wallet you want to use for staking</p>
                        <div className="space-x-4">
                            <Button image="/logo.png" name="SBLYR" href="https://adapools.org/pool/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8" />
                        </div>
                        <p className="text-gray-500">Or choose one of my fellow pools</p>
                        <div className="space-x-4">
                            <Button image="/nasec.png" name="NASEC" href="https://adapools.org/pool/aa8b94010cd3c7199be1d619079c184a59e6f1ad930926bc2bd38579" />
                            <Button image="/coder.png" name="CODER" href="https://adapools.org/pool/b8d2cf0a94b576a06917cef94d0e22b3bcd5d1cda1ba4a11deecfc1f" />
                            <Button image="/piada.png" name="PIADA" href="https://adapools.org/pool/b8d8742c7b7b512468448429c776b3b0f824cef460db61aa1d24bc65" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-lg">4. Enjoy your staking rewards</h2>
                        <p className="text-gray-500">You'll receive staking rewards every epoch (5 days)</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}