const DATABASE_ENDPOINT_BASE_URL = 'http://localhost:3000';

const AppEnvironment = {
  databaseEndpoint: DATABASE_ENDPOINT_BASE_URL,

  databaseEndpointRooms: DATABASE_ENDPOINT_BASE_URL + '/rooms',
  databaseEndpointRoomsById(id: number) : string {
    return this.databaseEndpointRooms + '/' + id;
  },

  databaseEndpointObjects: DATABASE_ENDPOINT_BASE_URL + '/objects',
  databaseEndpointObjectsById(id: number) : string {
    return this.databaseEndpointObjects + '/' + id;
  },
};

export default AppEnvironment;
