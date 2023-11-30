"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
class UpdateUserDto {
    id;
    firstName;
    lastName;
    fullName;
    email;
    imageUrl;
    rolId;
    generalStatusId;
    constructor(id, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.rolId = rolId;
        this.generalStatusId = generalStatusId;
    }
    static create(props) {
        const { id, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, } = props;
        return new UpdateUserDto(id, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId);
    }
    get valuesToUpdate() {
        const returnObject = {};
        if (this.firstName)
            returnObject["firstName"] = this.firstName;
        if (this.lastName)
            returnObject["lastName"] = this.lastName;
        if (this.fullName)
            returnObject["fullName"] = this.fullName;
        if (this.email)
            returnObject["email"] = this.email;
        if (this.imageUrl)
            returnObject["imageUrl"] = this.imageUrl;
        if (this.rolId)
            returnObject["rolId"] = this.rolId;
        if (this.generalStatusId)
            returnObject["generalStatusId"] = this.generalStatusId;
        return returnObject;
    }
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map