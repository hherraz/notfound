import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const NotFound = () => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">404 NOT FOUND</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
    </div>
  )
}

export {NotFound}