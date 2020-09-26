import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 2]);
const sorterNumbers = new Sorter(numbersCollection);
sorterNumbers.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('aXbDeF');
const sorterCharacters = new Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(1);
linkedListCollection.add(-99);
linkedListCollection.add(33);
const sorterLinkedList = new Sorter(linkedListCollection);
sorterLinkedList.sort();
linkedListCollection.print();
