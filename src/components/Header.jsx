import React from "react";
import Logo from "../assets/ee828743c9afa9792cf20d75995e134e.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import {
    HomeFilled,
  } from '@ant-design/icons';
  
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Header = () => {
    const list_search = [ 'Nhập khẩu Hàn' , 'Nhập Âu -50%' , 'Miễn Phí Gói Quà' , 'Điện gia dụng'  ]
  return (
    <>
      <div className="header-desktop">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-2">
            <div>
              <img src={Logo} width="40%" />
              <span className="text-[14px] text-[#003EA1] font-bold mt-2">
                Bảo vệ khách hàng 111%
              </span>
            </div>
          </div>

          <div className="col-span-7">
            <Search
              placeholder="Free Ship Đến 30K"
              allowClear
              enterButton="Tìm kiếm"
              size="large"
              onSearch={onSearch}
            />

            <div>
                <ul className="flex gap-4 pt-2">
                   {
                    list_search.map((item) =>{
                       return (
                        <>
                         <li className="text-[14px] text-[#808089]">{item}</li>
                        </>
                       )
                    })
                   }
                </ul>
            </div>
          </div>

          <div className="col-span-3">
            <div>
               <div className="flex w-max items-center  gap-2 p-[10px] cursor-pointer btn-home">
                <HomeFilled  style={{ fontSize: '20px', color: '#0A68FF' }} />
                <span className="text-[#0A68FF] text-[14px]">Trang chủ</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mobile"></div>


      {/* JSX */}
    </>
  );
};

export default Header;
