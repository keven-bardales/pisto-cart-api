"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserDto = void 0;
class GetAllUserDto {
    id;
    firstName;
    lastName;
    fullName;
    email;
    imageUrl;
    rolId;
    generalStatusId;
    createdAt;
    updatedAt;
    rol;
    constructor(id, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, createdAt, updatedAt, rol) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.rolId = rolId;
        this.generalStatusId = generalStatusId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.rol = rol;
    }
    static fromObject(object) {
        return new GetAllUserDto(object?.id, object?.firstName, object?.lastName, object?.fullName, object?.email, object?.imageUrl, object?.rolId, object?.generalStatusId, object?.createdAt, object?.updatedAt, object?.rol);
    }
}
exports.GetAllUserDto = GetAllUserDto;
//# sourceMappingURL=get-all-user.dto.js.map