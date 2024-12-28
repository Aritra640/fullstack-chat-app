
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { UserNameAvailable } from "../components/UserNameAvailable";
import { UserNameNotAvailable } from "../components/UserNameNotAvailable";
import { Button } from "../components/ui/button";

export function SignUp() {
  const [avail, setAvail] = useState(true);

  function toggleAvailable() {
    setAvail((a) => !a);
  }

  return (
    <div className="bg-slate-800 h-screen w-screen flex flex-shrink-0 justify-center items-center">
      <Card className="bg-slate-800 border border-white-1 min-w-200">
        <CardTitle className="flex justify-center pt-4 text-4xl">
          <div className="text-white">Sign</div>
          <div className="text-red-800"> Up</div>
        </CardTitle>
        <CardHeader>
          <div className="flex justify-center items-center">
            <div className="text-white">
              <a href="/signin">signin </a>
            </div>
            <div className="text-slate-500">, if already a user</div>
          </div>
        </CardHeader>

        <CardContent>
          <div>
            <div className="flex justify-between items-center">
              <input
                placeholder="                                             Enter Your username"
                className="text-white rounded-3xl w-full bg-slate-900 border border-white"
              />
              <div>
                {avail ? <UserNameAvailable /> : <UserNameNotAvailable />}
              </div>
            </div>
          </div>
          <div className="pt-3 flex justify-between gap-2">
            <input
              placeholder="                           First Name"
              className="text-white rounded-3xl w-full bg-slate-900 border border-white"
            />
            <input
              placeholder="                        Second Name"
              className="text-white rounded-3xl w-full bg-slate-900 border border-white"
            />
          </div>
          <div className="pt-3 flex justify-between gap-2">
            <input
              placeholder="                           password"
              className="text-white rounded-3xl w-full bg-slate-900 border border-white"
            />
            <input
              placeholder="                      confirm password"
              className="text-white rounded-3xl bg-slate-900 border border-white w-full"
            />
          </div>
          <div className="pt-3 flex justify-between">
            <input
              placeholder="                                                                          email"
              className="text-white rounded-3xl bg-slate-900 w-full border border-white"
            />
          </div>
          <div className = "flex justify-center pt-7">
            <div className="text-slate-400">*By signing up you are accepting </div>
            <div className="pl-1 text-white">
              <a href="/terms">Terms and conditions</a>
            </div>
          </div>
          <div className="pt-10 flex justify-between">
            <Button className = "rounded-3xl bg-slate-800"> cancel </Button>
            <Button className="rounded-3xl bg-slate-800"> sign up </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
