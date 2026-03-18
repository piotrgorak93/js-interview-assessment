import { Col, Flex, Row, Skeleton } from 'antd'

export const ConversionToolSkeleton = () => (
  <Flex gap="middle" vertical>
    <Row gutter={16}>
      <Col span={12}>
        <Skeleton.Input active />
      </Col>
      <Col span={12}>
        <Skeleton.Input active />
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={12}>
        <Skeleton.Input active />
      </Col>
      <Col span={12}>
        <Skeleton.Input active />
      </Col>
    </Row>
  </Flex>
)
