import Object from "src/app/models/object";
import Room from "src/app/models/room";

export default interface ObjectsListItemModel {
  object: Object;
  room?: Room;
}
