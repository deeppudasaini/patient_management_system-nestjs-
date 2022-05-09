export declare class CreatePrescriptionDto {
    staff_id: number;
    patient_id: number;
    drug_id: number;
    diagnosis_id: number;
    advice: string;
    strength: string;
    dose: string;
    dose_unit: string;
    frequency: number;
    start_date: Date;
    end_date: Date;
    haematology_test_advice: boolean;
    serelogy_test_advice: boolean;
    biochemical_test_advice: boolean;
    status: boolean;
}
