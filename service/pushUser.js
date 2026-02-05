import users from '../data/user.js'

export function pushUser(name, email){
    const newUser = {
        id: Date.now().toString(),
        email,
        name
    };

    users.push(newUser);
    console.log(users);

    return true;
}