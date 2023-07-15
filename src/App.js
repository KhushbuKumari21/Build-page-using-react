import React, { useState } from 'react';
import './App.css';

const App = () => {
  const totalBudget = "$400,000";
  const spentMonthToDate = "$299,762";
  const forecastedMonthEnd = "$2,874,582";

  const bucketsOwned = [
    { name: 'ACME Corp', budget: 200000, spend: 173762, forecast: 205049 },
    { name: 'Raman Inc', budget: 200000, spend: 124762, forecast: 292629 }
  ];

  const [approvals, setApprovals] = useState([
    {
      bucketName: 'ACME Corp',
      currentBudget: 200000,
      requestedBudget: 250000,
      requestedBy: 'John Doe',
      status: ''
    }
  ]);

  const memberBuckets = [
    { name: 'Longate', budget: 200000, spend: 173762, forecast: 205049 }
  ];

  const handleApprove = (index) => {
    setApprovals((prevApprovals) => {
      const updatedApprovals = [...prevApprovals];
      updatedApprovals[index].status = 'Approved';
      return updatedApprovals;
    });
  };

  const handleReject = (index) => {
    setApprovals((prevApprovals) => {
      const updatedApprovals = [...prevApprovals];
      updatedApprovals[index].status = 'Rejected';
      return updatedApprovals;
    });
  };

  return (
    <div className="app">
      <div className="header">
        <div className="greeting">
          <h1>Hi, Jennie Moss</h1>
        </div>
        <div className="scanned-info">
          <p>Last scanned on March 20th, 2023 11:30 PM IST</p>
        </div>
      </div>

      <div className="card-container">
        <div className="budget-card1 total-budget">
          <p className="amount">{totalBudget}</p>
          <h3>Total budget you own</h3>
        </div>
        <div className="budget-card2 spent-month">
          <p className="amount">{spentMonthToDate}</p>
          <h3>Spent month-to-date</h3>
        </div>
        <div className="budget-card3 forecast">
          <p className="amount">{forecastedMonthEnd}</p>
          <h3>Forecasted till month end</h3>
        </div>
      </div>

      <div className="buckets-container">
        <h2>Buckets you own</h2>
        <table className="bucket-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Budget</th>
              <th>Spend</th>
              <th>Forecast</th>
            </tr>
          </thead>
          <tbody>
            {bucketsOwned.map((bucket, index) => (
              <tr key={index}>
                <td>{bucket.name}</td>
                <td>${bucket.budget.toLocaleString()}</td>
                <td>${bucket.spend.toLocaleString()}</td>
                <td>${bucket.forecast.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="approval-container">
        <h2>Approvals assigned to you</h2>
        {approvals.length > 0 ? (
          <table className="bucket-table">
            <thead>
              <tr>
                <th>Bucket Name</th>
                <th>Current Budget</th>
                <th>Requested Budget</th>
                <th>Requested By</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((approval, index) => (
                <tr key={index}>
                  <td>{approval.bucketName}</td>
                  
                  <td>
              
              ${approval.currentBudget.toLocaleString()}
             
                 </td>

                  <td>${approval.requestedBudget.toLocaleString()}</td>
                  <td>{approval.requestedBy}</td>
                  <td>
                    {approval.status === '' && (
                      <>
                        <button
                          className="approve-button"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </button>
                        <button
                          className="reject-button"
                          onClick={() => handleReject(index)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {approval.status === 'Approved' && (
                      <p className="approval-status">Approved</p>
                    )}
                    {approval.status === 'Rejected' && (
                      <p className="approval-status">Rejected</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No approvals assigned to you</p>
        )}
      </div>

      <div className="buckets-container">
        <h2>Buckets you are a member of</h2>
        <table className="bucket-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Budget</th>
              <th>Spend</th>
              <th>Forecast</th>
            </tr>
          </thead>
          <tbody>
            {memberBuckets.map((bucket, index) => (
              <tr key={index}>
                <td>{bucket.name}</td>
                <td>${bucket.budget.toLocaleString()}</td>
                <td>${bucket.spend.toLocaleString()}</td>
                <td>${bucket.forecast.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
