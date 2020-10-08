import { User } from './models/User';

const user = new User({ name: 'Tom', age: 20});

console.log(user.get('name'));
console.log(user.get('age'));
