import styled from "styled-components";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useGuests } from "../guests/useGuests";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import { useAddBooking } from "./useAddBooking";
import Input from "../../ui/Input";
import { useCabins } from "../rooms/useRooms";

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
const Style = {
  backgroundColor: "var(--color-grey-0)",
  border: "1px solid var(--color-grey-300)",
  borderRadius: "var(--border-radius-sm)",
  padding: "0.8rem 1.2rem",
  boxShadow: "var(--shadow-sm)",
};

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateBookingForm({ onCloseModal }) {
  const { isAdding, addingBooking } = useAddBooking();
  const { isLoadingCabin, cabins } = useCabins();

  const { isLoading, guests } = useGuests();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  if (isLoading || isLoadingCabin) return <Spinner />;
  const breakfast = [{ value: "Yes" }, { value: "No" }];
  const paid = [{ value: "Yes" }, { value: "No" }];
  const status = [{ value: "unconfirmed" }, { value: "checked-in" }];
  function onSubmit(data) {
    addingBooking(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  return (
    <Form
      style={{ height: "80vh", overflowY: "auto" }}
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow error={errors?.guestId?.message}>
        <Label htmlFor="guestId">Guest email</Label>
        <select
          style={Style}
          name="guestId"
          id="guestId"
          value={guests.id}
          disabled={isAdding}
          {...register("guestId", {
            required: "This field is required",
          })}
        >
          {guests.map((e, key) => {
            return (
              <option key={key} value={e.id}>
                {e.email}
              </option>
            );
          })}
        </select>
      </FormRow>
      <FormRow error={errors?.startDate?.message}>
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          type="text"
          placeholder="yyyy-mm-dd"
          id="startDate"
          disabled={isAdding}
          {...register("startDate", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>
      <FormRow error={errors?.endDate?.message}>
        <Label htmlFor="endDate">End Date</Label>
        <Input
          type="text"
          placeholder="yyyy-mm-dd"
          id="endDate"
          defaultValue=""
          disabled={isAdding}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.hasBreakfast?.message}>
        <Label htmlFor="cabinId">Room</Label>
        <select
          style={Style}
          name="cabinId"
          id="cabinId"
          value={cabins.id}
          disabled={isAdding}
          {...register("cabinId", {
            required: "This field is required",
          })}
        >
          {cabins.map((e, key) => {
            return (
              <option key={key} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
      </FormRow>
      <FormRow>
        <Label htmlFor="hasBreakfast">Has Breakfast</Label>
        <select
          style={Style}
          name="hasBreakfast"
          value={breakfast.value}
          id="hasBreakfast"
          disabled={isAdding}
          {...register("hasBreakfast", {
            required: "This field is required",
          })}
        >
          {breakfast.map((e, key) => {
            return (
              <option key={key} value={e.value}>
                {e.value}
              </option>
            );
          })}
        </select>
      </FormRow>
      <FormRow error={errors?.observations?.message}>
        <Label htmlFor="observations">Observations</Label>
        <Input
          type="text"
          id="observations"
          defaultValue=""
          disabled={isAdding}
          {...register("observations", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.isPaid?.message}>
        <Label htmlFor="isPaid">IsPaid</Label>
        <select
          style={Style}
          name="isPaid"
          value={paid.value}
          id="isPaid"
          disabled={isAdding}
          {...register("isPaid", {
            required: "This field is required",
          })}
        >
          {paid.map((e, key) => {
            return (
              <option key={key} value={e.value}>
                {e.value}
              </option>
            );
          })}
        </select>
      </FormRow>
      <FormRow error={errors?.numGuests?.message}>
        <Label htmlFor="numGuests">Num of Guests</Label>
        <Input
          type="number"
          id="numGuests"
          defaultValue={0}
          disabled={isAdding}
          {...register("numGuests", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.numNights?.message}>
        <Label htmlFor="numNights">Num of Nights</Label>
        <Input
          type="number"
          id="numNights"
          defaultValue={0}
          disabled={isAdding}
          {...register("numNights", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.cabinPrice?.message}>
        <Label htmlFor="cabinPrice">Room Price</Label>
        <Input
          type="number"
          id="cabinPrice"
          defaultValue={0}
          disabled={isAdding}
          {...register("cabinPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.extrasPrice?.message}>
        <Label htmlFor="extrasPrice">Extras price</Label>
        <Input
          type="number"
          id="extrasPrice"
          defaultValue={0}
          disabled={isAdding}
          {...register("extrasPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.totalPrice?.message}>
        <Label htmlFor="totalPrice">Total price</Label>
        <Input
          type="number"
          id="totalPrice"
          defaultValue={0}
          disabled={isAdding}
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="status">Status</Label>
        <select
          style={Style}
          name="status"
          value={status.value}
          id="status"
          disabled={isAdding}
          {...register("status", {
            required: "This field is required",
          })}
        >
          {status.map((e, key) => {
            return (
              <option key={key} value={e.value}>
                {e.value}
              </option>
            );
          })}
        </select>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isAdding}>Add Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
