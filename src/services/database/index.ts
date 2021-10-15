import Realm from 'realm';

import {TodoModel} from './models/TodoModel';

export default function getRealm() {
  return Realm.open({
    schema: [TodoModel],
    schemaVersion: 1,
    path: 'taskii',
  });
}
