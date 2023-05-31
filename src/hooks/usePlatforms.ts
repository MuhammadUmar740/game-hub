import useData from "./useData";

export interface Parentplatform{
    id:number;
    name:string;
    slug:string;
}

const usePlatforms = ()=>useData<Parentplatform>('/platforms/lists/parents')
export default usePlatforms;