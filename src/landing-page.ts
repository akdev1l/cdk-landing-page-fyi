import { Stack, type StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as akdev1l from '@akdev1l/constructs';

export class LandingPageStack extends Stack {
  readonly githubProvider: akdev1l.GithubAccessProvider;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.githubProvider = new akdev1l.GithubAccessProvider(this, 'GithubAccess', { repo: "akdev1l/landing-page-fyi:*" });
  }
}
