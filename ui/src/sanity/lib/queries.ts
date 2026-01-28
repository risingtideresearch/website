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
    ...,
    programs[]-> {
      ...
    }
  }`;
};
