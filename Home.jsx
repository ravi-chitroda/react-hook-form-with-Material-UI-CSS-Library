// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl, { useFormControl } from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { Controller, useForm } from "react-hook-form";
// import { Button } from "@mui/material";
// // import { ButtonBase } from "@material-ui/core";
// // import { ButtonGroup } from "@mui/material";
// // import Button from "@material-ui/core/Button";
// // import { Button } from "@material-ui/core";

// // import { DatePicker, AdapterDateFns } from "@mui/lab/DatePicker";
// // import { LocalizationProvider } from "@mui/lab";

// // import {
// //   MuiPickersUtilsProvider,
// //   KeyboardTimePicker,
// //   KeyboardDatePicker,
// // } from "@material-ui/pickers";
// // import DateFnsUtils from "@date-io/date-fns";

// // import { DatePicker } from "material-ui-pickers";
// // import { DesktopDatePicker } from "@mui/lab";
// // import { MuiPickersUtilsProvider } from "@material-ui/pickers/MuiPickersUtilsProvider";
// // import DesktopDatePicker from "@material-ui/pickers";
// // import DateFnsUtils from "@date-io/date-fns";

// // import TextField from "@material-ui/core/TextField";

// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//     control,
//   } = useForm();
//   console.log("errors", errors);
//   console.log(watch());

//   const onSubmit = (data) => console.log(("data", data));
//   return (
//     <Box
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "50ch" },
//       }}
//     >
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         // onSubmit={handleSubmit((data) => {
//         //   console.log(data);
//         // })}
//       >
//         <div>
//           <Controller
//             render={(props) => (
//               <TextField
//                 {...props}
//                 label="First name"
//                 // autoComplete="firstname"
//                 // name="firstName"
//                 {...register("firstName", {
//                   required: "This field is Required",
//                   minLength: {
//                     value: 3,
//                     message: "minimum 3 characters required",
//                   },
//                 })}
//               />
//             )}
//             name="firstName"
//             control={control}
//           />
//           {errors.firstName && <span>This field is required</span>}

//           <TextField
//             id="outlined-required"
//             label="Last name"
//             autoComplete="Last name"
//           />
//           <TextField
//             id="outlined-required"
//             label="E-Mail"
//             autoComplete="E-Mail"
//           />
//           <TextField
//             id="outlined-required"
//             label="mobile"
//             autoComplete="mobile"
//           />

//           <TextField
//             id="outlined-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//           />
//           {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
//           {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             label="Basic example"
//             // value={value}
//             // onChange={(newValue) => {
//             //   setValue(newValue);
//             // }}
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </LocalizationProvider> */}

//           {/* <DatePicker
//           disableFuture
//           openTo="year"
//           inputFormat="dd/MM/yyyy"
//           label="Date of birth"
//           views={["year", "month", "day"]}
//         /> */}

//           {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <DesktopDatePicker
//             label="Date desktop"
//             inputFormat="MM/dd/yyyy"
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </MuiPickersUtilsProvider> */}
//           {/* <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="dd/MM/yyyy"
//           renderInput={(params) => <TextField {...params} />}
//         /> */}
//           {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             disableToolbar
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             id="date-picker-inline"
//             label="Date picker inline"
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//               "aria-label": "change date",
//             }}
//           />
//         </MuiPickersUtilsProvider> */}

//           <TextField
//             id="date"
//             label="Birthday"
//             type="date"
//             defaultValue="yyyy-MM-dd"
//             //   className={classes.textField}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />

//           <FormControl sx={{ m: 1, minWidth: 400 }}>
//             <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
//             <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               // value={age}
//               label="State"
//               // onChange={handleChange}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value="Gujarat">Gujarat</MenuItem>
//               <MenuItem value="Maharashtra">Maharashtra</MenuItem>
//               <MenuItem value="Rajasthan">Rajasthan</MenuItem>
//               <MenuItem value="Punjab">Punjab</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl>
//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Gender
//             </FormLabel>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </FormControl>
//           <div>
//             <FormControlLabel
//               control={<Checkbox name="tnc" />}
//               label="I agree terms & condition"
//             />
//           </div>
//           <div>
//             {/* <Button type="submit">Create Account</Button> */}
//             {/* <Button>Create Account</Button> */}
//             {/* <Button>A</Button> */}
//             {/* <ButtonGroup>A</ButtonGroup> */}
//             {/* <ButtonBase>Create Account</ButtonBase> */}
//             <Button>Create</Button>
//           </div>
//         </div>
//       </form>
//     </Box>
//   );
// }
