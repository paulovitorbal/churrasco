import Dexie from 'dexie';

const db = new Dexie('churrasco');
db.version(1).stores({
		convites: "++id, convite, time, sync"
	});

export default db;