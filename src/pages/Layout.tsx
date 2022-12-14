import React, {FC} from "react";
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import "./styles.scss";

export const Layout: FC = () => {
    return (
        <>
            <Header/>

            <div className="content">
                <Outlet/>
            </div>
        </>
    );
}