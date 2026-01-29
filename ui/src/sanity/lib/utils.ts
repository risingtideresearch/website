import { sanityFetch } from "./live";
import { activitiesQuery, homepageQuery, programsQuery } from "./queries";

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

type Program = {
  _id: string;
  name: string;
  description: string;
};

type Programs = Array<Program>

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

type Activities = Array<Activity>

type ActivitiesResponse = { data: Activities };

export async function fetchActivities(): Promise<ActivitiesResponse> {
  const data = await sanityFetch<Activities>({ query: activitiesQuery() });
                             
  return { data };
}
