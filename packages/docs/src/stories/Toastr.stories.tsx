import type { ComponentStory, Meta } from '@storybook/react'
import { Toastr, ToastrProps } from '@wakanda-ignite-ui/react'
import React, { useState } from 'react'

export default {
  title: 'Surfaces/Toastr',
  component: Toastr,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastrProps>

const Template: ComponentStory<typeof Toastr> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open toast</button>
      <Toastr duration={100000} open={open} onOpenChange={setOpen} {...args} />
    </>
  )
}

export const Primary = Template.bind({})
