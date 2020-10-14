import { User } from './models/user';

const user = new User({ id: 1 });

user.set({ name: 'NEW NAME', age: 999 });
user.save();

const newUser = new User({ name: 'new record', age: 77 });