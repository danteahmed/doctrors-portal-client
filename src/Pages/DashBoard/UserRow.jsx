import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ a, index, refetch }) => {
  const { email, role } = a;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
         if (res.status === 403) {
           toast.error("Failed to Make an admin");
         }
         return res.json()})
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{a.email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs text-white bg-green-500"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-red-600 text-white">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
