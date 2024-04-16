import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";

import { Concern } from "@/shared/types/concern";
import { Paragraph } from "@/shared/components/Typography";
import { VStack } from "@/shared/components/layout/stack/VStack";
import { DisplayHeader } from "@/shared/components/layout/DisplayHeader";

import { UpdateAccount } from "../../service/update-account/feature";
import { State } from "@/shared/types/state";
import { SxProps } from "@mui/material";
import { InsuranceProvider } from "@/shared/types/insurance-provider";

const DEFAULT_VALUES: Partial<UpdateAccount.Input> = {
  emailAddress: "",
  givenName: "",
  surname: "",
  concerns: [],
};

interface SettingsFormProps {
  onSubmit: (data: UpdateAccount.Input) => void;
  isSubmitting?: boolean;
  defaultValues?: Partial<UpdateAccount.Input>;
}

const INPUT_SX: SxProps = {
  "& input": {
    border: "0 !important",
  },
};

interface FormatConcernsTextProps {
  concerns: string[];
  hasFocus: boolean;
}

function formatConcernsText(props: FormatConcernsTextProps) {
  const { concerns, hasFocus } = props;
  const HAS_SELECTED_CONCERNS = concerns.length > 0;
  if (hasFocus) return "Type to search";
  if (HAS_SELECTED_CONCERNS) return "Add more concerns";
  return "Select your concerns";
}

function useSettingsForm() {
  const [concernsHasFocus, setConcernsHasFocus] = useState(false);
  const toggleConcernsHasFocus = useCallback(() => {
    setConcernsHasFocus(!concernsHasFocus);
  }, [concernsHasFocus]);
  const [stateHasFocus, setStateHasFocus] = useState(false);
  const toggleStateHasFocus = useCallback(() => {
    setStateHasFocus(!stateHasFocus);
  }, [stateHasFocus]);
  const [insuranceHasFocus, setInsuranceHasFocus] = useState(false);
  const toggleInsuranceHasFocus = useCallback(() => {
    setInsuranceHasFocus(!insuranceHasFocus);
  }, [insuranceHasFocus]);
  return {
    concernsHasFocus,
    toggleConcernsHasFocus,
    stateHasFocus,
    toggleStateHasFocus,
    insuranceHasFocus,
    toggleInsuranceHasFocus,
  };
}

export function SettingsForm({
  onSubmit,
  isSubmitting = false,
  defaultValues = DEFAULT_VALUES,
}: SettingsFormProps) {
  const form = useForm<UpdateAccount.Input>({
    reValidateMode: "onBlur",
    resolver: zodResolver(UpdateAccount.inputSchema),
    defaultValues,
  });
  const selectedConcerns = form.watch("concerns");
  const {
    concernsHasFocus,
    toggleConcernsHasFocus,
    stateHasFocus,
    toggleStateHasFocus,
    insuranceHasFocus,
    toggleInsuranceHasFocus,
  } = useSettingsForm();
  return (
    <VStack>
      <DisplayHeader
        title={"Account Settings"}
        subtitle={
          "We will use these details when evaluating therapists for you."
        }
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <VStack>
          <VStack spacing={0.25}>
            <InputLabel>Email Address</InputLabel>
            <TextField
              {...form.register("emailAddress", { required: true })}
              placeholder="Email Address"
            />
            <ErrorMessage
              errors={form.formState.errors}
              name="emailAddress"
              render={({ message }) => (
                <Paragraph color="error.main">{message}</Paragraph>
              )}
            />
          </VStack>
          <VStack spacing={0.25}>
            <InputLabel>First Name</InputLabel>
            <TextField
              {...form.register("givenName", { required: true })}
              placeholder="Your first name"
            />
            <ErrorMessage
              errors={form.formState.errors}
              name="givenName"
              render={({ message }) => (
                <Paragraph color="error.main">{message}</Paragraph>
              )}
            />
          </VStack>
          <VStack spacing={0.25}>
            <InputLabel>Last Name</InputLabel>
            <TextField
              {...form.register("surname", { required: true })}
              placeholder="Your last name"
            />
            <ErrorMessage
              errors={form.formState.errors}
              name="surname"
              render={({ message }) => (
                <Paragraph color="error.main">{message}</Paragraph>
              )}
            />
          </VStack>
          <VStack spacing={0.25}>
            <InputLabel>State</InputLabel>
            <Controller
              control={form.control}
              name="state"
              render={({ field }) => {
                return (
                  <Autocomplete
                    options={State.STATES}
                    onChange={(_, data) => {
                      field.onChange(data);
                    }}
                    renderInput={(params) => (
                      <TextField
                        placeholder={
                          stateHasFocus ? "Type to search" : "Select your state"
                        }
                        onBlur={toggleStateHasFocus}
                        onFocus={toggleStateHasFocus}
                        sx={INPUT_SX}
                        {...params}
                      />
                    )}
                    value={field.value}
                  />
                );
              }}
            />
          </VStack>
          <VStack spacing={0.25}>
            <InputLabel>Insurance Provider</InputLabel>
            <Controller
              control={form.control}
              name="insurance"
              render={({ field }) => {
                return (
                  <Autocomplete
                    options={InsuranceProvider.INSURANCE_PROVIDERS}
                    onChange={(_, data) => {
                      field.onChange(data);
                    }}
                    renderInput={(params) => (
                      <TextField
                        placeholder={
                          insuranceHasFocus
                            ? "Type to search"
                            : "Select your insurance provider"
                        }
                        onBlur={toggleInsuranceHasFocus}
                        onFocus={toggleStateHasFocus}
                        sx={INPUT_SX}
                        {...params}
                      />
                    )}
                    value={field.value}
                  />
                );
              }}
            />
          </VStack>
          <VStack spacing={0.25}>
            <InputLabel>Concerns</InputLabel>
            <Controller
              control={form.control}
              name="concerns"
              render={({ field }) => {
                return (
                  <Autocomplete
                    multiple
                    options={Concern.CONCERNS}
                    onChange={(_, data) => {
                      field.onChange(data);
                    }}
                    renderInput={(params) => (
                      <TextField
                        placeholder={formatConcernsText({
                          concerns: selectedConcerns,
                          hasFocus: concernsHasFocus,
                        })}
                        onBlur={toggleConcernsHasFocus}
                        onFocus={toggleConcernsHasFocus}
                        sx={INPUT_SX}
                        {...params}
                      />
                    )}
                    value={field.value}
                  />
                );
              }}
            />
            <ErrorMessage
              errors={form.formState.errors}
              name="concerns"
              render={({ message }) => (
                <Paragraph color="error.main">{message}</Paragraph>
              )}
            />
          </VStack>
          <Button
            type="submit"
            disabled={!form.formState.isValid || isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Settings"}
          </Button>
        </VStack>
      </form>
    </VStack>
  );
}
