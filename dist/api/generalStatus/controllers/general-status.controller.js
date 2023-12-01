"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalStatusController = exports.GeneralStatusController = void 0;
const create_general_status_dto_1 = require("@src/domain/dtos/generalStatus/create-general-status.dto");
const create_general_status_use_case_1 = require("@src/domain/use-cases/general-status/create-general-status.use-case");
const get_all_general_status_use_case_1 = require("@src/domain/use-cases/general-status/get-all-general-status.use-case");
const response_1 = require("@src/domain/wrappers/response");
const general_status_repository_impl_1 = require("@src/infrastructure/repositories/general-status.repository.impl");
class GeneralStatusController {
    generalStatusRepository;
    constructor(generalStatusRepository) {
        this.generalStatusRepository = generalStatusRepository;
    }
    getAll = (req, res, next) => {
        new get_all_general_status_use_case_1.GetAllGeneralStatusUseCase(this.generalStatusRepository)
            .execute()
            .then((generalStatuses) => {
            if (generalStatuses.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: generalStatuses,
                    message: "No se encontraron estados generales",
                    statusCode: 200,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: generalStatuses,
                message: "Lista de estados generales",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        const createGeneralStatusDto = create_general_status_dto_1.CreateGeneralStatusDto.fromObject(req.body);
        new create_general_status_use_case_1.CreateGeneralStatusUseCase(this.generalStatusRepository)
            .execute(createGeneralStatusDto)
            .then((generalStatus) => {
            return res.status(201).json(response_1.ApiResponse.success({
                data: generalStatus,
                message: "Estado creado con exito",
                statusCode: 201,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.GeneralStatusController = GeneralStatusController;
exports.generalStatusController = new GeneralStatusController(general_status_repository_impl_1.generalStatusRepository);
//# sourceMappingURL=general-status.controller.js.map