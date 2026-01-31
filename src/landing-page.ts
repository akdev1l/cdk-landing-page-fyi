import { Stack, type StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as akdev1l from '@akdev1l/constructs';

export class LandingPageStack extends Stack {
  readonly githubProvider: akdev1l.GithubAccessProvider;
  readonly spa: akdev1l.SinglePageApplication;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.githubProvider = new akdev1l.GithubAccessProvider(this, 'GithubAccess', { repo: "akdev1l/cdk-landing-page-fyi:*" });
    this.spa = new akdev1l.SinglePageApplication(this, 'LandingPageApplication', {
      package: '@akdev1l/landing-page',
    });
  }
}
