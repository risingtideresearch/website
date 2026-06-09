import { client } from "./client";
import { token } from "./token";
import type { QueryParams } from "next-sanity";

const isDev = process.env.NODE_ENV === "development";

export async function sanityFetch<T = unknown>({
  query,
  params = {},
  tags = ["sanity"],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: isDev ? { revalidate: 0 } : { tags },
    token: token,
  });
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

export { client };
