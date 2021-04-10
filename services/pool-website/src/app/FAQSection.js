import { useState } from "react"
import cx from "classnames"
import Content from "./Content"
import schema from "./schema"

function FAQItem({ title, content }) {

  const [open, setOpen] = useState(false)

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button type="button" onClick={() => setOpen(!open)} className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" aria-controls="faq-0" aria-expanded="false">
          <span className="font-medium text-gray-900">
            {title}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <svg className={cx("rotate-0 h-6 w-6 transform", open ? "-rotate-180" : "rotate-0")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      {open ? (
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-500">
            <Content value={content} />
          </p>
        </dd>
      ) : null}
    </div>
  )
}

export default function FAQSection() {

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            FAQ
      </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {schema.faq.items.map((item, index) => {
              return <FAQItem key={index} {...item} />
            })}
          </dl>
        </div>
      </div>
    </div>

  )
}
