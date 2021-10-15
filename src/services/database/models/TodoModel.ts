import Realm from 'realm';

export const TodoModel: Realm.ObjectSchema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: {type: 'objectId', indexed: true},
    title: 'string',
    description: 'string?',
    completed: 'boolean',
  },
};
