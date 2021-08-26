import { Position } from './position';

export interface Fund {
    fundId: string;
    name: string;
    size: number;
    equityPercentage: number;
    fixIncPercentage: number;
    commodPercentage: number;
    cashPercentage: number;
    positionList: Array<any>;
    //positionList: object;
}
