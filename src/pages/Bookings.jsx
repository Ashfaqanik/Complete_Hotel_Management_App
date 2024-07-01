import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBooking from "../features/bookings/AddBooking";
import AddGuest from "../features/guests/AddGuest";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <AddGuest />
          &nbsp;&nbsp;&nbsp;
          <AddBooking />
        </div>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <BookingTableOperations />
      </div>
      <BookingTable />
    </>
  );
}

export default Bookings;
