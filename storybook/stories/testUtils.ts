type RetryOptions = {
  retries?: number;
  delayMs?: number;
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export async function retry(action: () => Promise<void> | void, options: RetryOptions = {}): Promise<void> {
  const { retries = 2, delayMs = 120 } = options;
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      await action();
      return;
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await sleep(delayMs);
      }
    }
  }

  throw lastError;
}
