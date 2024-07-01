import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useAddGuest } from "./useAddGuest";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

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

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateGuestForm({ onCloseModal }) {
  const { isAdding, addingGuest } = useAddGuest();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    addingGuest(
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
      <FormRow error={errors?.fullName?.message}>
        <Label htmlFor="fullName">Guest Name</Label>
        <Input
          type="text"
          id="fullName"
          disabled={isAdding}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.email?.message}>
        <Label htmlFor="email">Guest Email</Label>
        <Input
          type="email"
          id="email"
          disabled={isAdding}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.nationality?.message}>
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          type="text"
          id="nationality"
          disabled={isAdding}
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.nationalID?.message}>
        <Label htmlFor="nationalID">NationalID</Label>
        <Input
          type="text"
          id="nationalID"
          defaultValue=""
          disabled={isAdding}
          {...register("nationalID", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.countryFlag?.message}>
        <Label htmlFor="countryFlag">Country Flag Url</Label>
        <Input
          type="text"
          id="countryFlag"
          defaultValue=""
          disabled={isAdding}
          {...register("countryFlag", {
            required: "This field is required",
          })}
        />
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
        <Button disabled={isAdding}>Add Guest</Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
