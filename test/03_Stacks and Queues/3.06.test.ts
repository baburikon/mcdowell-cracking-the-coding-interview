import {AnimalQueue, Cat, Dog} from './AnimalQueue';

/**
 *  В приюте для животных есть только собаки и кошки, а работа осуществляется в порядке очереди.
 *  Люди должны каждый раз забирать •самое старое• (по времени пребывания в питомнике) животное, но могут выбрать кошку или собаку (животное в любом случае будет •самым старым•).
 *  Нельзя выбрать любое понравившееся животное.
 *  Создайте структуру данных, которая обеспечивает функционирование этой системы и реализует операции enqueue, dequeueAny, dequeueDog и dequeueCat.
 *  Разрешается использование встроенной структуры данных LinkedList.
 */
describe('3.6', () => {

  let animals: AnimalQueue;

  beforeEach(() => {
    animals = new AnimalQueue([
      new Dog({name: 'Полкан'}),
      new Cat({name: 'Мурзик'}),
      new Dog({name: 'Дружок'})
    ]); // console.log(animals.toString());
  });

  it('011', () => {
    expect(animals.dequeueAny()?.name).toBe('Полкан');
  });
  it('012', () => {
    expect(animals.dequeueCat()?.name).toBe('Мурзик');
  });
  it('013', () => {
    animals.enqueue(new Cat({name: 'Пушок'}));
    expect(animals.toArray()).toEqual(['Полкан', 'Мурзик', 'Дружок', 'Пушок']);
  });

});
