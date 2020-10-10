import { User } from './models/User';

const user = new User({ name: 'Tom', age: 20 });

user.on('change', () => {});
user.on('change', () => {});

console.log(user);
