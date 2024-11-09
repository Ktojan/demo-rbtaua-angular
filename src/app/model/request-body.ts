export const VACANCIES_REQUEST_BODY = {
    operationName: "getPublishedVacanciesList",
    variables: {
        pagination: {
            count: 20,
            page: 0
        },
        filter: {
            keywords: "",
            clusterKeywords: [],
            salary: 0,
            showAgencies: true,
            showWithoutSalary: true,
            showMilitary: true,
        },
        sort: "BY_BUSINESS_SCORE",
        isBrowser: true
    },
   query: "query getPublishedVacanciesList($filter: PublishedVacanciesFilterInput!, $pagination: PublishedVacanciesPaginationInput!, $sort: PublishedVacanciesSortType!, $isBrowser: Boolean!) {\n  publishedVacancies(filter: $filter, pagination: $pagination, sort: $sort) {\n    totalCount\n    items {\n      ...PublishedVacanciesItem\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PublishedVacanciesItem on Vacancy {\n  id\n  schedules {\n    id\n    __typename\n  }\n  title\n  distanceText\n  description\n  sortDateText\n  hot\n  designBannerUrl\n  isPublicationInAllCities\n  badges {\n    name\n    __typename\n  }\n  salary {\n    amount\n    comment\n    amountFrom\n    amountTo\n    __typename\n  }\n  company {\n    id\n    logoUrl\n    name\n    honors {\n      badge {\n        iconUrl\n        tooltipDescription\n        locations\n        isFavorite\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  city {\n    id\n    name\n    __typename\n  }\n  showProfile\n  seekerFavorite @include(if: $isBrowser) {\n    isFavorite\n    __typename\n  }\n  seekerDisliked @include(if: $isBrowser) {\n    isDisliked\n    __typename\n  }\n  formApplyCustomUrl\n  anonymous\n  isActive\n  publicationType\n  __typename\n}\n"
}
