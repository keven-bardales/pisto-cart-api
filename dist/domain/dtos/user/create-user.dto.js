"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    googleId;
    firstName;
    lastName;
    fullName;
    email;
    imageUrl;
    rolId;
    generalStatusId;
    password;
    confirmPassword;
    constructor(googleId, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, password, confirmPassword) {
        this.googleId = googleId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.rolId = rolId;
        this.generalStatusId = generalStatusId;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    get getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set hashedPassword(password) {
        this.password = password;
    }
    static create(props) {
        const { googleId, firstName, lastName, email, imageUrl, rolId, generalStatusId, password, confirmPassword } = props;
        return new CreateUserDto(googleId, firstName, lastName, `${firstName} ${lastName}`, email, imageUrl, rolId, generalStatusId, password, confirmPassword);
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map