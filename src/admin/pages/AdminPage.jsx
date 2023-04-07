import React from "react";
import {Sidebar} from "flowbite-react";
import { RiDashboardLine, RiUser3Line } from "react-icons/ri"
import {MdOutlineManageSearch} from "react-icons/md"

const AdminPage = () => {
    return (
        <div>
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={RiDashboardLine}
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={RiUser3Line}
                            >
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={MdOutlineManageSearch}
                            >
                                Jobs
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={MdOutlineManageSearch}
                            >
                                Courses
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                // icon={HiTable}
                            >
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>)
}

export default AdminPage;