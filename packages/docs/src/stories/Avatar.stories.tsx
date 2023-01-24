import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@wakanda-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/alisson-amaral-silva.png',
    alt: 'Alisson Amaral',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
