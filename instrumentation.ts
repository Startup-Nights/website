import { trace, context } from '@opentelemetry/api';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node';

// only grpc is supported for now, see
// https://community.grafana.com/t/sending-one-simple-trace-to-tempo-via-http/82901/2
process.env.OTEL_EXPORTER_OTLP_HEADERS = `Authorization=Basic ${Buffer.from(process.env.GRAFANA_TEMPO_AUTH).toString('base64')}`

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'website',
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter({
    url: "https://tempo-prod-10-prod-eu-west-2.grafana.net:443",
  })),
});
 
sdk.start();
 
export const tracer = trace.getTracer('startup-nights');
export { context };