export interface VacancyFilter {
    cityId?: string,
    keywords: string;
    clusterKeywords: string[]; 
    salary: number;
    showAgencies: boolean;
    showWithoutSalary: boolean;
    showMilitary: boolean;
}

export interface SearchObject {
    cityFilter: string,
    keywords?: string;
}

export type QueryVariables = {
    pagination: {
        count: number;
        page: number;
    };
    filter: VacancyFilter;
    sort: string;
    isBrowser: boolean;
};

