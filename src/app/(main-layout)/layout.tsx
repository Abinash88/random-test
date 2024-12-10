import type { _LayoutProps } from '@/types/global'

export default function layout({ children }: _LayoutProps) {
  return (
    <div>{
      children
    }</div>
  )
}
