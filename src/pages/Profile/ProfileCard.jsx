import editIcon from "@/assets/icons/edit.svg";
import { Button } from "@/components/ui/button";

import EditProfileModal from "./EditProfileModal";
import { useContext } from "react";

import { UserContext } from "@/hoc/UserContext";

const ProfileCard = () => {
  const info = useContext(UserContext);

  return (
    <div className="space-y-4 md:space-y-2 p-6 bg-[#EFECF9]">
      <div className="w-full max-w-xs lg:max-w-none mx-auto">
        <img
          src={info.imagePath}
          alt="Your profile image"
          className="rounded-sm w-full"
        />
      </div>
      <div className="flex-auto">
        <div className="flex justify-between">
          <div className="">
            <p className="">{info.firstName + " " + info.lastName}</p>
            <p className="">{info.age} years</p>
          </div>
          <EditProfileModal>
            <Button variant="ghost" className="hover:bg-white/60">
              <img src={editIcon} className="w-6" alt="edit profile" />
            </Button>
          </EditProfileModal>
        </div>
        <div className="">
          <h4 className="font-bold">Contacts</h4>
          <p className="">{info.email}</p>
          <p className="">{info.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
