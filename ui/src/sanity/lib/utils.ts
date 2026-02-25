import { sanityFetch } from "./live";
import {
  activitiesQuery,
  directoryQuery,
  homepageQuery,
  lastUpdatedQuery,
  programsQuery,
} from "./queries";

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

export async function fetchLastUpdated(): Promise<LastUpdatedResponse> {
  const data = await sanityFetch<T>({ query: lastUpdatedQuery() });

  return { data };
}

type Program = {
  _id: string;
  name: string;
  description: string;
};

type Programs = Array<Program>;

type ProgramsResponse = { data: Programs };

export async function fetchPrograms(): Promise<ProgramsResponse> {
  const data = await sanityFetch<Programs>({ query: programsQuery() });

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
}

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
}

export async function fetchDirectory(): Promise<DirectoryResponse> {
  const data = await sanityFetch<Directory>({ query: directoryQuery() });

  return { data };
}
