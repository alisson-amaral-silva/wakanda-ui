import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastrRoot = styled(Toast.Root, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '0.75rem 1.25rem',
})

export const ToastrClose = styled(Toast.Close, {
  color: '$gray200',
  display: 'flex',
})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontWeight: 700,
  fontSize: '$xl',
  lineHeight: '$base',
  fontFamily: 'Roboto',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontWeight: 400,
  fontSize: '$sm',
  lineHeight: '$base',
  fontFamily: 'Roboto',
})

export const ToastrViewport = styled(Toast.Viewport, {
  width: '22.5rem',
  height: '5.125rem',
  margin: 0,
  listStyle: 'none',
  maxWidth: '100vw',
  outline: 'none',
  zIndex: 2147483647,
})
