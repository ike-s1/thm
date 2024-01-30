import React from "react";
import './UserCaseCard.scss';
import userIcon from "../../../assets/user-pick.png";
import useTextFormatter from "../../../hooks/UseTextFormatter";


// mark bold text inside asterisks - *text*

export const UserCaseCard = ({ userCaseData: { text, title, name } }) => {
  const formattedText = useTextFormatter(text);
    return (
      <div className="user-case-card">
        <div className="user-case-content">
          <div className="case-title">User Case</div>
          <p className="case-text">{formattedText}</p>
          <div className="case-label">
            <div className="label-info">
              <p className="user-name">{name}</p>
              <p className="user-title">{title}</p>
            </div>
            <img src={userIcon} className="label-icon" alt="user-icon" />
          </div>
        </div>
      </div>
    );
};