import { registerOTel, OTLPHttpJsonTraceExporter } from '@vercel/otel';

import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);

export function register() {
  const deploymentEnvironment =
    process.env.DEPLOYMENT_ENVIRONMENT ??
    (process.env.NODE_ENV === 'production' ? 'production' : 'stage');

  registerOTel({
    serviceName: 'portfolio',
    traceExporter: new OTLPHttpJsonTraceExporter({
        url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
    }),
    attributes: {
      'deployment.environment': deploymentEnvironment,
    },
  });
}