import React from "react";
import { useSelector } from "react-redux";

function RankContanier() {
    // const userinfo = useSelector((state) => state.user.)
    return(
        <div className="w-[387px] h-61px p-5 gap-[10px] bg-[#6800BA] shadow-008 rounded-[10px] font-Pretendard mb-5">
            <p className="font-bold text-[18px] text-[#ffffff]">채채님의 현재 랭킹은 <span />위 입니다 🎉</p>
        </div>
    );
}

export default RankContanier;