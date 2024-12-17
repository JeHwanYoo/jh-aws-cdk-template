import * as cdk from 'aws-cdk-lib'
import { aws_ec2 } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class JhVpcStack extends cdk.Stack {
  vpc: aws_ec2.Vpc

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.vpc = new aws_ec2.Vpc(this, id, {
      ipAddresses: aws_ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: aws_ec2.SubnetType.PUBLIC,
          mapPublicIpOnLaunch: true,
        },
        {
          cidrMask: 24,
          name: 'PrivateEgress',
          subnetType: aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'PrivateIsolated',
          subnetType: aws_ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    })
  }
}
