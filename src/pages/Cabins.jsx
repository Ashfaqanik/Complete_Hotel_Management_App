import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
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
