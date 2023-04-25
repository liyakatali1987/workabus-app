import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { RiDashboardLine, RiUser3Line } from "react-icons/ri"
import { MdOutlineManageSearch } from "react-icons/md";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Jobs from "./Jobs";
import Courses from "./Courses";

const AdminPage = () => {
    const [component, setComponent] = useState(<Dashboard />);
    return (
        <div className="flex">
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={RiDashboardLine}
                                onClick={() => setComponent(<Dashboard />)}
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={RiUser3Line}
                                onClick={() => setComponent(<Users />)}
                            >
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={MdOutlineManageSearch}
                                onClick={() => setComponent(<Jobs />)}
                            >
                                Jobs
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={MdOutlineManageSearch}
                                onClick={() => setComponent(<Courses />)}
                            >
                                Courses
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className="w-full">{component}</div>
        </div>)
}

export default AdminPage;