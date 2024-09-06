'use client'

import { useQueryClient } from '@tanstack/react-query'
import { RefreshIcon } from 'hugeicons-react'
import React from 'react'

const LastUpdated = ({queryKey, updatedAt}:{updatedAt?:string; queryKey?:string}) => {
  const queryClient = useQueryClient()
  const update =async()=>{
    queryKey &&  queryClient.invalidateQueries({queryKey:[queryKey.toString()], refetchType: 'all',
    })

  }
  return (
    <div className="mt-[16px] flex justify-between">
    <div className="flex items-center gap-x-[12px]">
      <RefreshIcon  onClick={update} className="size-[20px] active:animate-spin text-[#8E97A6]" />
      <span className="font-openSans  max-lg:text-[12px] lg:text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
        Last updated on {updatedAt && updatedAt.slice(0, updatedAt.length-7)}
      </span>
    </div>
    <div className="inline-flex max-lg:hidden items-center gap-x-[2px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
      <span className="underline">Subscribed to: </span>
      <span className="text-greenPrimary"> Basic Plan</span>
    </div>
  </div>
  )
}

export default LastUpdated