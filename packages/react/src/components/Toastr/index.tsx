import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastrClose,
  ToastrRoot,
  Title,
  Description,
  ToastrViewport,
  Button,
} from './style'
import { ComponentProps } from 'react'

export interface ToastrProps extends ComponentProps<typeof ToastrRoot> {
  title: string
  description: string
}

export function Toastr({ title, description, ...props }: ToastrProps) {
  return (
    <Toast.Provider swipeDirection="right">
      <ToastrRoot {...props}>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <ToastrClose asChild>
          <Button>
            <X size={20} />
          </Button>
        </ToastrClose>
      </ToastrRoot>
      <ToastrViewport />
    </Toast.Provider>
  )
}
