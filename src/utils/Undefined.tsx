import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="h-screen bg-black text-white place-items-center ">
      <h1>404</h1>
      <p>Aradığınız sayfa bulunamadı</p>
      <Link to="/">Anasayfa</Link>
    </div>
  );
};

export default Undefined;
