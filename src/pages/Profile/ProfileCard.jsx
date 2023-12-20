import editIcon from "../../assets/icons/edit.svg";
import { Button } from "@/components/ui/button";

const ProfileCard = ({ info }) => {
  return (
    <div className="p-10 bg-[#EFECF9] space-y-2">
      <img
        src={info.imagePath}
        alt="Your profile image"
        className="rounded-sm"
      />
      <div className="flex justify-between">
        <div className="">
          <p className="">{info.name}</p>
          <p className="">{info.age} years</p>
        </div>
        <Button variant="ghost" className="hover:bg-white/60">
          <img src={editIcon} alt="edit profile" />
        </Button>
      </div>
      <div className="">
        <h4 className="font-bold">Contacts</h4>
        <p className="">{info.email}</p>
        <p className="">{info.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
