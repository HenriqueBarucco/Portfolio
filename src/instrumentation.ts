import { registerOTel, OTLPHttpJsonTraceExporter } from '@vercel/otel'

import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR)

export function register() {
  const deploymentEnvironment =
    process.env.DEPLOYMENT_ENVIRONMENT ??
    (process.env.NODE_ENV === 'production'
      ? 'production'
      : 'stage')
  const otlpEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  const traceExporter = otlpEndpoint
    ? new OTLPHttpJsonTraceExporter({ url: otlpEndpoint })
    : undefined

  registerOTel({
    serviceName: 'portfolio',
    ...(traceExporter
      ? { traceExporter }
      : {}),
    attributes: {
      'deployment.environment': deploymentEnvironment,
    },
  })
}
