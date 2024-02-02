import React from "react";
import "./СomparePlatformsTable.scss";

const tableData = [
  {
    feature: "Lorem ipsum",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
  {
    feature: "Lorem ipsum dolor sit amet, lorem ipsum",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
  {
    feature: "Lorem ipsum dolor",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
  {
    feature: "Lorem ipsum",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
  {
    feature: "Lorem ipsum dolor",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
  {
    feature: "Lorem ipsum dolor sit amet",
    htmForms: true,
    typeForm: false,
    googleForms: false,
  },
];

export const ComparePlatformsTable = () => {
  return (
    <table className="compare-platforms-table">
      <thead>
        <tr>
          <th>Features</th>
          <th>THM Forms</th>
          <th>TypeForm</th>
          <th>Google Forms</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.feature}</td>
            <td className={item.htmForms ? "yes" : "no"}>
              <div>
                <div className="ellipse" />
                <span>{item.htmForms ? "Yes" : "No"}</span>
              </div>
            </td>
            <td className={item.typeForm ? "yes" : "no"}>
              <div>
                <div className="ellipse" />
                <span>{item.typeForm ? "Yes" : "No"}</span>
              </div>
            </td>
            <td className={item.googleForms ? "yes" : "no"}>
              <div>
                <div className="ellipse" />
                <span>{item.googleForms ? "Yes" : "No"}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
