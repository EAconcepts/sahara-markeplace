import { RefreshIcon } from 'hugeicons-react'
import React from 'react'

const LastUpdated = () => {
  return (
    <div className="mt-[16px] flex justify-between">
    <div className="flex items-center gap-x-[12px]">
      <RefreshIcon className="size-[20px] text-[#8E97A6]" />
      <span className="font-openSans text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
        Last updated on Tuesday, 25th Jun. 12:03pm
      </span>
    </div>
    <div className="inline-flex items-center gap-x-[2px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
      <span className="underline">Subscribed to: </span>
      <span className="text-greenPrimary"> Basic Plan</span>
    </div>
  </div>
  )
}

export default LastUpdated