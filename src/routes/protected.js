import { Navigate, Outlet } from "react-router-dom";

const Protected = ({role}) => {
    const token = localStorage.getItem("token");

    return !token ? <Outlet /> : <Navigate to="/signIn" />;
};

export default Protected;

// export const handleProtected = async () => {
//     const token = localStorage.getItem("token");
//     if (token) throw redirect("/signIn");
//     return null;
// };
//It will work fine but I prefer using the above method of creating protected.js file 
//because for private routes we have normally a large number of files so we will need to pass loader to every route 
//while using the protected component it’s way easier.