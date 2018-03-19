export class User {
    constructor(user) {
        this.picture = user.picture.thumbnail
        this.name = user.name.first
        this.email = user.email
        this.dateOfBirth = user.dob

    }
}
