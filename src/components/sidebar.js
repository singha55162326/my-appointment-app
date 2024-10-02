import React from "react";
import Link from "next/link";
const sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64">
      <div className="p-6 text-2xl font-bold">Dashboard</div>
      <nav className="mt-6">
        <Link href="/appointments">
          <a className="block p-4 hover:bg-gray-700">Appointments</a>
        </Link>
        <Link href="/calendar">
          <a className="block p-4 hover:bg-gray-700">ຕາຕະລາງການນັດພົບ</a>
        </Link>
        <Link href="/admin">
          <a className="block p-4 hover:bg-gray-700">ຈັດການຂໍ້ມູນຜູ້ໃຊ້</a>
        </Link>
      </nav>
    </div>
  );
};

export default sidebar;
