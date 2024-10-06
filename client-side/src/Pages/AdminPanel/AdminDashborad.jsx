import { FcLowBattery } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcDonate } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";

const data = [
    {
      Serial: 1,
      ProjectTitle: 'Bring Documents',
      ProjectOwner: 'Titus Kitamura',
      Organization: 'Clezerus Clacofonix',
      Number: 357,
      Value: '$105,148',
      Left: '$96.08M',
      Date: '12/1/2019',
      Status: 'Ongoing',
    },
    {
      Serial: 2,
      ProjectTitle: 'Check availability locally',
      ProjectOwner: 'Thad Eddings',
      Organization: 'Zarrrazzii',
      Number: 177,
      Value: '$106,460',
      Left: '$80.43M',
      Date: '11/20/2019',
      Status: 'Completed',
    },
    {
      Serial: 3,
      ProjectTitle: 'Take Mom to Doctor',
      ProjectOwner: 'Edgar Torrey',
      Organization: 'Acardan & Boorg Corp.',
      Number: 994,
      Value: '$167,208',
      Left: '$12.81M',
      Date: '11/16/2019',
      Status: 'Ongoing',
    },
    // ... Add the rest of your data here
  ];
const AdminDashborad = ()=> {
    return (
<div>
  <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col p-10  ">
        <p className=" font-bold mb-4">Projects</p>
        <p className="text-slate-400 mb-6">Detailed Project Information</p>
        <div className="shadow-md rounded-xl flex flex-row mb-28 gap-16 min-h-32 p-8">
            <div><AiFillDollarCircle  className="h-10 w-10"></AiFillDollarCircle><p className="text-3xl font-bold">335$</p><p className="text-slate-400">Total Esitmated Invesment</p></div>
            <div><FcDonate className="h-10 w-10"></FcDonate><p className="text-3xl font-bold">335$</p><p className="text-slate-400">Total Invested Amount</p></div>
            <div><FcLowBattery className="h-10 w-10"></FcLowBattery><p className="text-3xl font-bold">335$</p><p className="text-slate-400">Total Left for Invesment</p></div>
            <div><FcIdea className="h-10 w-10"></FcIdea><p className="text-3xl font-bold">33</p><p className="text-slate-400">Total Projects</p></div>
        </div>
        <p className=" font-bold mb-12">Project List</p>
    <div className="overflow-x-auto ">
      <table className="min-w-full divide-y  divide-gray-200">
        <thead >
          <tr className='bg-salmon rounded-xl'>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Serial
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Project Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Project Owner
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Organization
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Number of Investors
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Total Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Remaining Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.Serial}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Serial}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {row.ProjectTitle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.ProjectOwner}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Organization}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                {row.Value}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-500">
                {row.Left}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li className="font-extrabold  hover:text-white text-salmon text-lg mb-2 rounded-lg">
          <a>Admin</a>
        </li>
        <li className="font-bold hover:bg-salmon hover:text-white text-lg mb-2 rounded-lg">
          <a>Dashboard</a>
        </li>
        <li className="font-bold hover:bg-salmon hover:text-white text-lg rounded-lg">
          <a>Pending Projects</a>
        </li>
      </ul>
    </div>
  </div>
</div>

    );
}

export default AdminDashborad;