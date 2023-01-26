import type { Meta, StoryObj } from '@storybook/react'
import { TooltipInput, TooltipInputProps } from '@wakanda-ignite-ui/react'
import { Crown } from 'phosphor-react'
import React from 'react'

export default {
  title: 'Surfaces/Tooltip',
  component: TooltipInput,
  args: {
    text: 'Teste do tooltip',
    children: (
      <button style={{ all: 'unset' }}>
        <Crown size={22} weight="bold" />
      </button>
    ),
  },
} as Meta<TooltipInputProps>

export const Primary: StoryObj<TooltipInputProps> = {}
