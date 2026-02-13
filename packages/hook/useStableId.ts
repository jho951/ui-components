import { useRef } from "react";

import { generateId } from "@lib/id.ts";

function useStableId(prefix = "ui"): string {
  const idRef = useRef<string>("");

  if (!idRef.current) {
    idRef.current = `${prefix}-${generateId()}`;
  }

  return idRef.current;
}

export { useStableId };
