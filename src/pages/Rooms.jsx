import CabinTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/rooms/AddRoom";
import CabinTableOperations from "../features/rooms/RoomTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Rooms</Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <AddCabin />
        </div>
      </Row>

      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CabinTableOperations />
        </div>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
