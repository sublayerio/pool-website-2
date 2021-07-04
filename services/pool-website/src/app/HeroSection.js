import { useEffect, useState } from 'react'
import axios from 'axios'
import numeral from 'numeral'
const toAda = (input) => numeral(input / 1000000).format('0,0.00a').replace('.00', '') + ' ₳';

export default function HeroSection() {

  const [data, setData] = useState(null)

  useEffect(async () => {

    if (data) {
      return
    }

    const { data: { data: _data } } = await axios.get('https://js.adapools.org/pools/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8/summary.json')
    console.log(_data)
    setData(_data)
  })

  const items = [
    { name: "Hardware", value: data => "1x Apple Mac Mini M1 16GB, 2x Raspberry Pi 4 8GB" },
    { name: "Ticker", value: data => data.db_ticker },
    { name: "Pool ID", value: data => "8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8" },
    { name: "Epoch Fee", value: data => toAda(data.tax_fix) },
    { name: "Margin Fee", value: data => `${parseFloat(data.tax_ratio, 10) * 100}%` },
    { name: "Pledge", value: data => toAda(data.pledged) },
    { name: "Live stake", value: data => toAda(data.total_stake) },
    { name: "Return of ADA", value: data => `${data.roa}%` },
  ]


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
      <div className="relative mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-primary-600 to-primary-700 rounded-full">
                  I'm collaborating
                    </span>
                <span className="ml-4 text-sm">
                  Contact me
                    </span>
                {/* Heroicon name: solid/chevron-right */}
                <svg
                  className="ml-2 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="block">
                  Let's decentralize
                </span>
                <span className="text-primary-600">Cardano</span>
                <span className="text-white">{" "}together</span>
              </h1>
              <div className="text-white mt-4 text-xs md:text-base">
                {items.map(item => {

                  return (
                    <div className="flex items-center space-x-2 py-1">
                      <div className="font-bold no-wrap flex-shrink-0">
                        {item.name}
                      </div>
                      <div className="opacity-75 overflow-hidden overflow-ellipsis">
                        {data ? item.value(data) : '-'}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <a href="https://pool.pm/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8" target="_blank" className="text-white border-b border-white py-1">
                  View on pool.pm
                </a>
                <a href="https://adapools.org/pool/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8" target="_blank" className="text-white border-b border-white py-1">
                  View on adapools.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
