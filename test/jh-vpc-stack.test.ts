import * as cdk from 'aws-cdk-lib'
import { Match, Template } from 'aws-cdk-lib/assertions'
import { JhVpcStack } from '../lib/jh-vpc-stack'

test('VPC Snapshot', () => {
  const app = new cdk.App()
  // WHEN
  const stack = new JhVpcStack(app, 'MyTestStack')
  // THEN
  const template = Template.fromStack(stack)

  expect(template.toJSON()).toMatchSnapshot()
})
