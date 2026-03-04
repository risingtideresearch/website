import { PortableTextBlock } from "next-sanity";
import { sanityFetch } from "./live";
import {
  activitiesQuery,
  directoryQuery,
  homepageQuery,
  lastUpdatedQuery,
  programsQuery,
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
  link?: Array<{ url: string; title?: string }>;
  activities?: Array<Activity>,
};

type Programs = Array<Program>;

type ProgramsResponse = { data: Programs };

export async function fetchPrograms(): Promise<ProgramsResponse> {
  const data = await sanityFetch<Programs>({ query: programsQuery() });

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
