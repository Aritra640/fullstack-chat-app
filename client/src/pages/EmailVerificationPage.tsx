
import { OTP } from "../components/OTP";
import { Button } from "../components/ui/button";

export function EmailVerification() {
  return (
    <div className="bg-slate-800 h-screen w-screen fixed flex flex-col justify-center items-center">
      <div className="text-white">
        <OTP />
      </div>
      <div className="text-white texl-xl p-4">
        Enter OTP received from your registered email
      </div>
      <div className="pt-8 ">
        <Button className="bg-white rounded-3xl text-black">submit</Button>
      </div>
    </div>
  );
}
