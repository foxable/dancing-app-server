export interface ApiOptions
{
    path: string;
}

export interface Dance
{
    id: number;
    name: string;
}

export interface Figure
{
    id: number;
    name: string;
    description: string;
    level: number;
    video: string;
}

export class ApiService
{
    private readonly path: string;

    public constructor(path: string)
    {
        this.path = path;
    }

    public async fetchDances(): Promise<Dance[]>
    {
        const response = await fetch(`${this.path}/dances`);
        return await response.json();
    }

    public async fetchFigures(dance: string): Promise<Figure[]>
    {
        const response = await fetch(`${this.path}/dances/${dance}/figures`);
        return await response.json();
    }
}