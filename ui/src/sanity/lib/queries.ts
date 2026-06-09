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
 */
export const lastUpdatedQuery = () => {
  return `
  *[!(_type in ["sanity.imageAsset", "sanity.fileAsset", "system.group"])] | order(_updatedAt desc) [0]._updatedAt`;
};

/**
 *
 * @returns
 */
export const programsQuery = (slug?: string) => {
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

  return `
  *[_type=="program" && defined(content) && length(content) > 0]{
    _id,
    name,
    description,
    _lastUpdated,
    slug,
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
