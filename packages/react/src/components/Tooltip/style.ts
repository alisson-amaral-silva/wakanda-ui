import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$xs',
  padding: '10px 15px',
  fontSize: '0.938rem',
  lineHeight: '1',
  color: '$gray100',
  backgroundColor: '$gray900',
  userSelect: 'none',
  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: `${slideUpAndFade}`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
