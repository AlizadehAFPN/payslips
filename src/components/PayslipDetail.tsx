import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockPayslips } from "../mockPayslips";
import { Payslip } from "../types";
import { Filesystem, Directory } from "@capacitor/filesystem";

import "./Payslip.css"; // Assuming we have CSS for styling and animations

const PayslipDetail: React.FC = () => {
  const { id } = useParams();
  const [payslip, setPayslip] = useState<Payslip | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const foundPayslip = mockPayslips.find((p) => p.id === id);
    setPayslip(foundPayslip);
  }, [id]);

  const downloadPayslip = async () => {
    if (!payslip) return;

    // Example: Fetching the file from a remote URL (assuming 'file' is a URL)
    const response = await fetch(payslip.file);
    console.log(response, "response");
    const blob = await response.blob();
    console.log(blob, "blob");
    const reader = new FileReader();
    const fileName = payslip.file.split("/").pop(); // Extracting file name from URL
    console.log(fileName, "fileName");

    if (fileName !== undefined)
      Filesystem.downloadFile({
        path: fileName,
        url: response?.url,
        directory: Directory.Documents,
      }).then((res: any) => {
        console.log(res);
      });

    reader.readAsDataURL(blob);
  };

  if (!payslip) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <div className="payslip-info">
        <h2 className="payslip-title">Payslip Details</h2>
        <p>
          <strong>ID:</strong> {payslip.id}
        </p>
        <p>
          <strong>Period:</strong> {payslip.fromDate} to {payslip.toDate}
        </p>
        <button onClick={downloadPayslip} className="download-button">
          Download Payslip
        </button>
      </div>
    </div>
  );
};

export default PayslipDetail;
