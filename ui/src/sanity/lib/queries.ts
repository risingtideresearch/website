/**
 *
 * @returns
 */
export const homepageQuery = () => {
  return `
  *[_type=="home"][0]{
    ...,
    image {
      ...,
      asset -> {
        ...,
        metadata {
          ...,
        }
      }
    },
  }`;
};

/**
 *
 * @returns
 */
export const programsQuery = (slug?: string, filterForPage?: boolean) => {
  if (slug) {
    return `
    *[_type=="program"${slug ? ` && slug.current == "${slug}"` : ""}]{
      ...,
      "iconUrl": icon.asset->url,
      "iconAlt": icon.asset->altText,
      image {
        ...,
        crop,
        hotspot,
        asset -> {
          ...,
          metadata {
            ...
          }
        }
      },
      "activities": *[_type=="activity" && references(^._id)]{
        ...
      }
    }`;
  }

  let query = "";
  if (filterForPage) {
    query += `&& defined(*[_type=="activity" && references(^._id)][0])`;
  }

  return `
  *[_type=="program" && defined(*[_type=="activity" && references(^._id)][0]) ${query}]{
    _id,
    name,
    description,
    _lastUpdated,
    slug,
    link,
    "hasPage": (defined(link.url) || count(content[_type != "block" || count(children[text != ""]) > 0]) > 0),
    "iconUrl": icon.asset->url,
    "iconAlt": icon.asset->altText,
    "activity": *[_type=="activity" && references(^._id)][0].name,
    "image": image.asset->{
      ...
    },
  }`;
};

/**
 *
 * @returns
 */
export const activitiesQuery = () => {
  return `
  *[_type=="activity"]{
    _id,
    name,
    description,
    programs[]-> {
      _id,
      _updatedAt,
      name,
      description,
      slug,
      link,
      "iconUrl": icon.asset->url,
      "iconAlt": icon.asset->altText,
      "hasContent": count(content[_type != "block" || count(children[text != ""]) > 0]) > 0
    }
  }`;
};

/**
 *
 * @returns
 */
export const resourcesQuery = () => {
  return `
  *[_type == "resource" && showOnHomepage == true] | order(name asc) {
    _id,
    name,
    url,
    description,
    "type": type->name,
  }`;
};

export const updatesQuery = (programId: string) => {
  return `
  *[_type == "update" && program._ref == "${programId}"] | order(date desc) {
    _id,
    title,
    content,
    date,
    link,
  }`;
};

export const allUpdatesQuery = () => {
  return `
  *[_type == "update"] | order(date desc) {
    _id,
    title,
    content,
    date,
    link,
    "programSlug": program->slug.current,
    "programName": program->name,
  }`;
};

export const directoryQuery = () => {
  return `
  *[_type == "personGroup"] {
    _id,
    name,
    description,
    "people": *[_type == "person" && references(^._id)] {
      _id,
      name,
      image,
      "role": groups[group._ref == ^.^._id][0].name
    }
  }`;
};
