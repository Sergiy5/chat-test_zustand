import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { setAuthUser } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("chat-user");
    setAuthUser(null);
  };
  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};
export default LogoutButton;
