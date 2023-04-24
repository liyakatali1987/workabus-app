import React, { useEffect, useState, useMemo } from 'react';
import { Auth0Api } from '../../api/Auth0Api';
import Table from 'react-tailwind-table';

const Users = () => {
    const [users, setUsers] = useState([]);

    const columns = useMemo(() =>
        [
            {
                field: 'email',
                use: 'Email',
            },
            {
                field: 'name',
                use: 'Name',
            },
            {
                field: 'email_verified',
                use: 'Email verified',
            }
        ]
        , []);

    const getUsers = async () => {
        const users = await Auth0Api.getUsers();
        setUsers(users);

    }

    const customRow = (row, column, display_value) =>{
        if (column.field === 'email_verified'){
            return row.email_verified ? 'Yes' : 'No';
        }
    };


    useEffect(() => {
        getUsers();
        console.log(users)
    }, []);

    return (
            <Table columns={columns} rows={users} table_header='Workabus Users' row_render={customRow} per_page={20}/>
    )


}

export default Users;