import { client } from "./client";
import { token } from "./token";
import type { QueryParams } from "next-sanity";

/**
 * Fetch function for Sanity queries
 * For live preview, use the client with token
 */
export async function sanityFetch<T = unknown>({
  query,
  params = {},
  revalidate = 60, // Cache revalidation in seconds
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<T> {
  return client.fetch<T>(
    query,
    params,
    {
      next: {
        revalidate: revalidate,
      },
      // Use token for draft content if needed
      token: token,
    }
  );
}

export async function sanityFetchStatic<T = unknown>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<T> {
  return client.fetch<T>(query, params);
}

// Export client for direct use if needed
export { client };
