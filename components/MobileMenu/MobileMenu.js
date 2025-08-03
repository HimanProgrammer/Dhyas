import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; // Fix: Import ListItem correctly
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import menus from '../../data/mobileMenuData.json'; // ✅ Update path as per your structure

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item) => (
                        <ListItem key={item.id} className={item.id === openId ? 'active' : null}>
                            {item.submenu ? (
                                <Fragment>
                                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                        {item.title}
                                        <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                    </p>
                                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                        <List className="subMenu">
                                            {item.submenu.map((submenu) => (
                                                <ListItem key={submenu.id}>
                                                    <Link href={submenu.link} onClick={ClickHandler} className="active">
                                                        {submenu.title}
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </Fragment>
                            ) : (
                                <Link href={item.link} className="active">
                                    {item.title}
                                </Link>
                            )}
                        </ListItem>
                    ))}
                </ul>
            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
