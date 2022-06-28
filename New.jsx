// import { Button } from "@material-ui/core/Button";
// import Button from "@mui/material/Button";
import { FormControlLabel } from "@material-ui/core";
import {
  FormControl,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  FormLabel,
  FormHelperText,
  Checkbox,
  FormGroup,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "40vw",
        }}
      >
        {/* <input {...register("firstName", { required: "true" })} />
        {errors.firstName && <p>This field is required </p>}
        <TextField
          label="Last Name"
          {...register("lastName", {
            required: "true",
          })}
        />
        {errors.lastName && <p>This field is must be filled</p>} */}
        <Controller
          render={(props) => (
            <TextField
              {...props}
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              label="fName"
              {...register("fName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "minimum 3 character required",
                },
              })}
            />
          )}
          name="fName"
          control={control}
          defaultValue=""
        />
        {/* {errors.fName && <p>This field must be filled</p>} */}
        {errors.fName && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.fName.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              {...props}
              label="lName"
              {...register("lName", {
                required: "Last Name is Required",
                minLength: {
                  value: 3,
                  message: "minimum 3 character required",
                },
                maxLength: {
                  value: 6,
                  message: "maximum 6 letters allowed",
                },
              })}
            />
          )}
          name="lName"
          control={control}
          defaultValue=""
        />
        {/* {errors.lName && <p>Please fill Last Name</p>} */}
        {errors.lName && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.lName.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              {...props}
              label="email"
              {...register("email", {
                required: "email is mandatory",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please Enter Valid Email address",
                },
              })}
            />
          )}
          name="email"
          control={control}
        />
        {errors.email && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.email.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              {...props}
              label="mobile"
              {...register("mobile", {
                required: "Mobile Number is Required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please Enter Correct Mobile Address",
                },
              })}
            />
          )}
          name="mobile"
          control={control}
        />
        {errors.mobile && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.mobile.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              sx={{
                margin: "2px",
                width: { xs: "100%", md: "80%", sm: "60%" },
              }}
              {...props}
              label="password"
              {...register("password", {
                required: "Password must be required",
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    "Password with minimum 8 character Upper & Lower case with symbol",
                },
              })}
            />
          )}
          name="password"
          control={control}
        />
        {errors.password && (
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.password.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              {...props}
              //   label="Birthdate"
              type="date"
              {...register("date", {
                required: "Please select Birthdate",
              })}
            />
          )}
          name="date"
          control={control}
          //   defaultValue=""
        />
        {errors.date && (
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.date.message}
          </div>
        )}

        <Controller
          render={(props) => (
            <TextField
              style={{ width: "40vw" }}
              sx={{ margin: "2px" }}
              //   id="full-width-text-field"

              {...props}
              type="state"
              select
              label="Please Choose State"
              {...register("state", {
                required: "Please choose your State",
              })}
            >
              <label> State</label>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
              <MenuItem value="MadhyaPradesh">MadhyaPradesh</MenuItem>
            </TextField>
          )}
          name="state"
          control={control}
        />
        {errors.state && (
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.state.message}
          </div>
        )}

        <FormControl error={Boolean(errors.gender)}>
          <FormLabel
            component="legend"
            style={{ width: "40vw" }}
            sx={{ margin: "2px" }}
          >
            {" "}
            Choose Your Gender{" "}
          </FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            style={{
              display: "flex",
              justifyContent: "space-arround",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Other"
            />
          </RadioGroup>
          <FormHelperText
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.gender?.message}
          </FormHelperText>
        </FormControl>

        <FormGroup
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="tnc"
                {...register("tnc", {
                  required: "please agree our terms and condtions",
                })}
              />
            }
            label="I agree all terms and conditions"
          />
        </FormGroup>
        {errors.tnc && (
          <div
            style={{
              display: "block",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
            sx={{ my: 3 }}
          >
            {errors.tnc.message}
          </div>
        )}

        <input
          type="submit"
          style={{ width: "50%", backgroundColor: "blueviolet", color: "snow" }}
          variant="contained"
          color="primary"
        />
        {/* <Button varient="contained">Create</Button> */}
        {/* <RaisedButton>A</RaisedButton> */}
      </form>
    </div>
  );
};

export default New;
