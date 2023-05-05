import React, { useEffect, useState, useMemo } from 'react';
import { Auth0Api } from '../../api/Auth0Api';
import { DataGrid } from '@mui/x-data-grid';


const Users = () => {
    const [users, setUsers] = useState([]);

    const columns = useMemo(() =>
        [
            {   
                field: 'email',
                headerName: 'Email',
                flex:1,
                hideable: true,
            },
            {
                field: 'name',
                headerName: 'Name',
                flex:1
            },
            {
                field: 'email_verified',
                headerName: 'Email verified',
                flex:1,
                renderCell: (params) => params.value ? <div style={{color: 'green'}}>Yes</div> : <div style={{color: 'red'}}>No</div>,
            }
        ]
        , []);

    const getUsers = async () => {
        const users = await Auth0Api.getUsers();
        setUsers(users);

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid  
                autoHeight
                rows={users} 
                columns={columns} 
                getRowId={ (row) => row.email + row.user_id}
                rowsLoadingMode="server"
                sx = {{
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                      },
                }}
                />
        </div>
    )

}

export default Users;