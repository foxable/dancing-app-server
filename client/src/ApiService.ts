export interface IOptions
{
    path: string;
}

export interface IDance
{
    id: number;
    name: string;
    abbr: string;
}

export interface IFigure
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

    public async fetchDances(): Promise<IDance[]>
    {
        const response = await fetch(`${this.path}/dances`);
        return await response.json();
    }

    public async fetchFigures(dance: string): Promise<IFigure[]>
    {
        const response = await fetch(`${this.path}/dances/${dance}/figures`);
        return await response.json();
    }
}