import Object from "../models/object";
import RoomMocks from "./rooms";

const livingRoom = RoomMocks.find((room) => room.name == 'Living Room')!;
const kitchenRoom = RoomMocks.find((room) => room.name == 'Kitchen')!;

const ObjectMocks: Object[] = [
  {
    id: 1001,
    roomId: livingRoom.id!,
    name: 'TV'
  },
  {
    id: 1002,
    roomId: livingRoom.id!,
    name: 'Couch'
  },
  {
    id: 2001,
    roomId: kitchenRoom.id!,
    name: '30cm Cooking Pot'
  },
  {
    id: 2002,
    roomId: kitchenRoom.id!,
    name: '20cm Cooking Pot'
  },
  {
    id: 2003,
    roomId: kitchenRoom.id!,
    name: '16cm Cooking Pot'
  }
];

export default ObjectMocks;
