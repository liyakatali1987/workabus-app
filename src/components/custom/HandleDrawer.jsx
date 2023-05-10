import React from 'react'
import { useAtom } from 'jotai';

const HandleDrawer = () => {
    const [drawer, setDrawer] = useAtom(needDrawer);
    const [open, setOpen] = useAtom(openDrawer);

    useEffect(() => {
        setDrawer(true);

    }, [drawer]);

    useEffect(() => {
        setOpen(true);
    }, [])
    const handleDrawerToggle = () => {
        setOpen(!openDrawer);
    }
  return (
    <div>HandleDrawer</div>
  )
}

export default HandleDrawer