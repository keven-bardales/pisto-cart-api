"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithPasswordDto = void 0;
class UserWithPasswordDto {
    id;
    googleId;
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
    password;
    constructor(id, googleId, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, createdAt, updatedAt, rol, password) {
        this.id = id;
        this.googleId = googleId;
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
        this.password = password;
    }
    static fromObject(object) {
        return new UserWithPasswordDto(object?.id, object?.googleId, object?.firstName, object?.lastName, object?.fullName, object?.email, object?.imageUrl, object?.rolId, object?.generalStatusId, object?.createdAt, object?.updatedAt, object?.rol, object?.password);
    }
}
exports.UserWithPasswordDto = UserWithPasswordDto;
//# sourceMappingURL=user-with-password.dto.js.map