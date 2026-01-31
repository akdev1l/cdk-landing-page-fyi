import { App, Stack } from 'aws-cdk-lib';
import * as akdev1l from '@akdev1l/constructs';
import { LandingPageStack } from './landing-page';

const app = new App();
const stack = new LandingPageStack(app, 'LandingPageStack', {
});

app.synth();
