export type RequestParams = {
  [key: string]: string | number
}

export const prepareQueryParams = (
  params: RequestParams = {}
): Record<string, string> =>
  Object.entries(params).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `${value}`,
    }),
    {}
  )
