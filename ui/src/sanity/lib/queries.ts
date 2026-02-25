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
export const programsQuery = () => {
  return `
  *[_type=="program"]{
    ...
  }`;
};

/**
 *
 * @returns
 */
export const activitiesQuery = () => {
  return `
  *[_type=="activity"]{
    description,
    name,
    _id,
    _updatedAt,
    programs[]-> {
      ...
    }
  }`;
};

/**
 *
 * @returns
 */
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
