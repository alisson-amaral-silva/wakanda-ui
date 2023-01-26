import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent, TooltipArrow } from './style'
import { Text } from '../Text'

export interface TooltipInputProps {
  text: string
  children: ReactNode
}

export function TooltipInput({ text, children }: TooltipInputProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent side="top">
            <Text>{text}</Text>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipInput.displayName = 'Tooltip'
