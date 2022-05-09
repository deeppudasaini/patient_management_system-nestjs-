import { CreateDrugDto } from './create-drug.dto';
declare const UpdateDrugDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDrugDto>>;
export declare class UpdateDrugDto extends UpdateDrugDto_base {
    trade_name?: string;
    generic_name?: string;
    staff_id?: number;
}
export {};
