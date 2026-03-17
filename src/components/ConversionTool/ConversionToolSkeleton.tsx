import { Flex, Skeleton } from 'antd'

export const ConversionToolSkeleton = () => {
  return (
    <Flex gap="medium" vertical={false} style={{ width: '20%' }}>
      <Skeleton paragraph={{ rows: 2 }} />
      <Skeleton paragraph={{ rows: 2 }} />
    </Flex>
  )
}
