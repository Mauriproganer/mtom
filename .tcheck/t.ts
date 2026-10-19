import type { ErrorRouteComponent, ErrorComponentProps } from "@tanstack/react-router";

function A({ error, reset }: { error: Error; reset: () => void }) {
  return String(error) + String(reset);
}

function B(props: ErrorComponentProps) {
  return String(props.error) + String(props.reset);
}

const a: ErrorRouteComponent = A;
const b: ErrorRouteComponent = B;
export { a, b };
