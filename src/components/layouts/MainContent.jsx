import Adress from "../Adress";
import Table from "../Table";
import Navbar from "./Navbar";

const MainContent = () => {
  return (
    <div className="space-y-6 ">
      <div className="p-4">
      <Adress />
      <Table/>
      </div>
    </div>
  );
};

export default MainContent;
