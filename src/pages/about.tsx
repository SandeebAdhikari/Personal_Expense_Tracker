import SideBar from "../components/sideBar";
import { TransactionContext } from "../context/TransactionContext";
import React, { useContext } from "react";

const About = () => {
  const { transactions, income, expenses, balance } =
    useContext(TransactionContext);

  return (
    <div className="flex">
      <SideBar balance={balance} />
      <div className="flex flex-col m-6 w-full">
        <h1 className="text-2xl font-bold">About This Project</h1>
        <p className="mt-6">
          Welcome to the Personal Expense Tracker, a project developed with the
          goal of helping users efficiently manage and monitor their finances.
          Here's an overview of what we've accomplished so far:
        </p>
        <h2 className="text-xl font-semibold mt-4">Project Overview</h2>
        <p className="mt-2">
          This application is designed to track your daily income and expenses,
          offering insights into your financial habits. With a focus on
          usability and accessibility, the interface allows you to quickly add,
          edit, and delete transactions, while providing visual representations
          of your financial data.
        </p>
        <h2 className="text-xl font-semibold mt-4">Key Features Implemented</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Transaction Management:</strong> Add, edit, and delete
            transactions with ease. Each transaction can be categorized, and its
            details such as date, time, amount, and payment mode are tracked.
          </li>
          <li>
            <strong>Persistent Data:</strong> Your transactions are stored in
            the browser's local storage, ensuring that your data remains intact
            even after refreshing the page or closing the browser.
          </li>
          <li>
            <strong>Interactive Dashboard:</strong> The dashboard displays key
            financial metrics, including total income, expenses, balance, and
            the number of transactions. Visual elements like pie charts and bar
            diagrams help in understanding your financial status at a glance.
          </li>
          <li>
            <strong>Sidebar Navigation:</strong> The sidebar provides quick
            access to different sections of the application, including the
            dashboard, transactions, and other relevant pages. The active page
            is highlighted to improve navigation.
          </li>
          <li>
            <strong>GitHub Integration:</strong> A clickable GitHub logo in the
            sidebar links directly to the developer's GitHub profile, showcasing
            the project's source code and encouraging collaboration.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">Technical Details</h2>
        <p className="mt-2">
          The frontend of the application is built using React.js, leveraging
          its component-based architecture for a modular and maintainable
          codebase. Tailwind CSS has been used for styling the application,
          ensuring a clean, responsive, and modern user interface. We have also
          integrated Chart.js to visualize financial data with interactive and
          dynamic charts, such as pie charts for expense distribution and bar
          charts for income versus expenses.
        </p>
        <h2 className="text-xl font-semibold mt-4">Future Enhancements</h2>
        <p className="mt-2">
          We plan to continue enhancing the project by adding features like user
          authentication, more detailed financial reports, and export options
          for your data.
        </p>
      </div>
    </div>
  );
};

export default About;
