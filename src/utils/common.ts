export function getBaseUrl() {
  if (typeof window !== "undefined") return "";

  return process.env.DEPLOY_URL ?? process.env.NEXT_PUBLIC_BASE_URL;
}
