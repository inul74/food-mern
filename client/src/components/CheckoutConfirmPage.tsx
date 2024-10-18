import { Loader2 } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const loading = false;

  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkoutHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: api implementation start from here
    console.log(input);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="font-semibold">Review Your Order</DialogTitle>
        <DialogDescription className="text-xs">
          Double-check your delivery details and ensure everything is in order.
          When you are ready, hit the confirm button to finalize your order.
        </DialogDescription>
        <form
          onSubmit={checkoutHandler}
          className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0"
        >
          <div>
            <Label>
              Fullname
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <div>
            <Label>
              Email
              <Input
                disabled
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <div>
            <Label>
              Contact
              <Input
                type="text"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <div>
            <Label>
              Address
              <Input
                type="text"
                name="address"
                value={input.address}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <div>
            <Label>
              City
              <Input
                type="text"
                name="city"
                value={input.city}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <div>
            <Label>
              Country
              <Input
                type="text"
                name="country"
                value={input.country}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </Label>
          </div>
          <DialogFooter className="col-span-2 pt-5">
            {loading ? (
              <Button disabled className="bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="bg-orange hover:bg-hoverOrange">
                Continue To Payment
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
