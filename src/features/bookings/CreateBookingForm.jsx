import styled from "styled-components";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20rem 2fr 0.5fr;
  gap: 2rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateBookingForm() {
  return (
    <Form style={{ height: "80vh", overflowY: "auto" }}>
      <FormRow>
        <Label htmlFor="guestId">Guest Id</Label>
        <Textarea type="number" id="guestId" defaultValue={0} />
      </FormRow>
      <FormRow>
        <Label htmlFor="startDate">Start Date</Label>
        <Textarea type="text" id="startDate" defaultValue="" />
      </FormRow>
      <FormRow>
        <Label htmlFor="endDate">End Date</Label>
        <Textarea type="text" id="endDate" defaultValue="" />
      </FormRow>
      <FormRow>
        <Label htmlFor="cabinId">Cabin Id</Label>
        <Textarea type="number" id="cabinId" defaultValue={0} />
      </FormRow>
      <FormRow>
        <Label htmlFor="hasBreakfast">Has Breakfast</Label>
        <Textarea type="bool" id="hasBreakfast" defaultValue="true" />
      </FormRow>
      <FormRow>
        <Label htmlFor="observations">Observations</Label>
        <Textarea type="text" id="observations" defaultValue="" />
      </FormRow>
      <FormRow>
        <Label htmlFor="isPaid">IsPaid</Label>
        <Textarea type="bool" id="isPaid" defaultValue="true" />
      </FormRow>
      <FormRow>
        <Label htmlFor="numGuests">Num of Guests</Label>
        <Textarea type="number" id="numGuests" defaultValue={0} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Add Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
