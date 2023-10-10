import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Modalcreate() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
    
        <div className="icons" onClick={() => setOpen(true)}>
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} className="Icon"/>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/profile"}
          >
            <p>Create</p>
          </Link>
          </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new post</DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Body</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input required />
              </FormControl>
              
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default Modalcreate;
