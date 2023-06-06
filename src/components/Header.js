import {Link} from "react-router-dom";
import React from "react";

export function Header() {
    return (
        <>
            <hr/>
            <h3><b>Danh sách sản phẩm</b></h3>
            <hr/>
            <Link to={'/home/create'} style={{backgroundColor: '#22910d', color: '#fff', padding: '8px 16px',borderRadius: '4px',textDecoration: 'none', border: '1px solid #007bff' , margin: '5px 5px 5px 0px'}}>Thêm mới</Link>
            <Link to={`/home/list`} style={{backgroundColor: '#43bea3', color: '#fff', padding: '8px 16px',borderRadius: '4px',textDecoration: 'none', border: '1px solid #007bff' , margin: '5px 5px 5px 0px'}}>Trở lại</Link>

            <br/>
        </>
    )
}
