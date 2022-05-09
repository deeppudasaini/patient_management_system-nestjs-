"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisController = void 0;
const common_1 = require("@nestjs/common");
const diagnosis_service_1 = require("./diagnosis.service");
const create_diagnosis_dto_1 = require("./dto/create-diagnosis.dto");
const update_diagnosis_dto_1 = require("./dto/update-diagnosis.dto");
let DiagnosisController = class DiagnosisController {
    constructor(diagnosisService) {
        this.diagnosisService = diagnosisService;
    }
    create(createDiagnosisDto) {
        return this.diagnosisService.create(createDiagnosisDto);
    }
    findAll() {
        return this.diagnosisService.findAll();
    }
    findOne(id) {
        return this.diagnosisService.findOne(+id);
    }
    update(id, updateDiagnosisDto) {
        return this.diagnosisService.update(+id, updateDiagnosisDto);
    }
    remove(id) {
        this.diagnosisService.remove(+id);
        return {
            "message": "Diagnosis Removed Successfully"
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_diagnosis_dto_1.CreateDiagnosisDto]),
    __metadata("design:returntype", void 0)
], DiagnosisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiagnosisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagnosisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diagnosis_dto_1.UpdateDiagnosisDto]),
    __metadata("design:returntype", void 0)
], DiagnosisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagnosisController.prototype, "remove", null);
DiagnosisController = __decorate([
    (0, common_1.Controller)('diagnosis'),
    __metadata("design:paramtypes", [diagnosis_service_1.DiagnosisService])
], DiagnosisController);
exports.DiagnosisController = DiagnosisController;
//# sourceMappingURL=diagnosis.controller.js.map