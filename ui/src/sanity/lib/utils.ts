import { PortableTextBlock } from "next-sanity";
import { sanityFetch } from "./live";
import {
  activitiesQuery,
  directoryQuery,
  homepageQuery,
  lastUpdatedQuery,
  programsQuery,
  resourcesQuery,
  updatesQuery,
} from "./queries";
import {
  PortableTextMarkDefinition,
  ArbitraryTypedObject,
  PortableTextSpan,
  PortableTextBlockStyle,
  PortableTextListItemType,
} from "@portabletext/types";

export type Homepage = {
  title: string;
  description: string;
  _updatedAt: Date;
};

type HomepageResponse = { data: Homepage };

export async function fetchHomepage(): Promise<HomepageResponse> {
  const data = await sanityFetch<Homepage>({ query: homepageQuery() });

  return { data };
}

export async function fetchLastUpdated(): Promise<string> {
  const data = await sanityFetch<string>({ query: lastUpdatedQuery() });

  return data;
}

export type Program = {
  _updatedAt: string;
  _id: string;
  name: string;
  description: string;
  slug: {
    current?: string;
  };
  content?:
    | PortableTextBlock<
        PortableTextMarkDefinition,
        ArbitraryTypedObject | PortableTextSpan,
        PortableTextBlockStyle,
        PortableTextListItemType
      >[]
    | undefined;
  image?: {
    crop?: { top: number; bottom: number; left: number; right: number };
    hotspot?: { x: number; y: number; width: number; height: number };
    asset?: {
      _ref?: string;
      url?: string;
      metadata?: {
        dimensions?: { width: number; height: number };
      };
    };
  };
  link?: { url: string; title?: string };
  activities?: Array<Activity>;
  iconUrl?: string;
  iconAlt?: string;
  activity?: string;
  hasContent?: boolean;
};

type Programs = Array<Program>;

type ProgramsResponse = { data: Programs };

export async function fetchPrograms(filterForPage = false): Promise<ProgramsResponse> {
  const data = await sanityFetch<Programs>({ query: programsQuery(undefined, filterForPage) });

  return { data };
}

export async function fetchProgram(slug?: string): Promise<ProgramsResponse> {
  const data = await sanityFetch<Programs>({ query: programsQuery(slug) });

  return { data };
}

type Activity = {
  _id: string;
  name: string;
  description: string;
  programs: Array<Program>;
};

type Activities = Array<Activity>;

type ActivitiesResponse = { data: Activities };

export async function fetchActivities(): Promise<ActivitiesResponse> {
  const data = await sanityFetch<Activities>({ query: activitiesQuery() });

  return { data };
}

type DirectoryResponse = {
  data: Directory;
};

type Group = {
  _id: string;
  name: string;
  description: string;
  people: Array<Person>;
};

type Directory = Array<Group>;

type Person = {
  name: string;
  _id: string;
  role: string;
};

export async function fetchDirectory(): Promise<DirectoryResponse> {
  const data = await sanityFetch<Directory>({ query: directoryQuery() });

  return { data };
}

export type Resource = {
  _id: string;
  name: string;
  url: string;
  description?: string;
  type?: string;
};

type ResourcesResponse = { data: Array<Resource> };

export async function fetchResources(): Promise<ResourcesResponse> {
  const data = await sanityFetch<Array<Resource>>({ query: resourcesQuery() });

  return { data };
}

export type Update = {
  _id: string;
  title: string;
  date: string;
  content?: Program["content"];
  link?: Array<{ url: string; title?: string }>;
};

type UpdatesResponse = { data: Array<Update> };

export async function fetchUpdates(programId: string): Promise<UpdatesResponse> {
  const data = await sanityFetch<Array<Update>>({ query: updatesQuery(programId) });

  return { data };
}
