"use client";

import * as React from "react";

export interface ProviderEntry<P = any> {
  provider: React.ComponentType<P>;
  props?: P;
}

export interface ProvidersProps {
  data?: ProviderEntry[];
  children: React.ReactNode;
}

export function Providers({ data = [], children }: ProvidersProps) {
  return (
    <>
      {data.reduceRight((acc, { provider: Provider, props }) => {
        return <Provider {...(props as any)}>{acc}</Provider>;
      }, children)}
    </>
  );
}
