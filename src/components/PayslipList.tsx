// src/components/PayslipList.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { mockPayslips } from "../mockPayslips";
import "./Payslip.css"; // Assuming we have CSS for styling and animations

const PayslipList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="list-container">
      <h1 className="list-title">Payslips</h1>
      <div className="payslip-list">
        {mockPayslips.map((payslip) => (
          <li
            key={payslip.id}
            className="payslip-item"
            onClick={() => navigate(`/payslip/${payslip.id}`)}
          >
            <div className="payslip-period">id: {payslip.id}</div>
            <div className="payslip-period">Start Date: {payslip.fromDate}</div>
            <div className="payslip-period">End Date: {payslip.toDate}</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PayslipList;
