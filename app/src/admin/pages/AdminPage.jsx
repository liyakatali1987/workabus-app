import { Box, Drawer, Toolbar, AppBar, Typography } from '@mui/material'
import React from 'react'

const AdminPage = () => {
    return (
        <div>
            <AppBar>
                {/* <Toolbar>
                    <Typography>Header</Typography>
                </Toolbar> */}
            </AppBar>
            <div>
                <Drawer variant='permanent'>
                    Drawer
                    Liyakat
                </Drawer>
            </div>
        </div>


    )
}

export default AdminPage