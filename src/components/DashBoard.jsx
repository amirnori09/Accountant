const DashBoard = () => {
  return (
    <div class="flex h-screen">
      <div class="w-1/4 bg-gray-800 text-white">
        <h1 class="text-2xl font-bold p-4">Dashboard</h1>
        <ul>
          <li class="p-2 hover:bg-gray-700">Dashboard</li>
          <li class="p-2 hover:bg-gray-700">Analytics</li>
          <li class="p-2 hover:bg-gray-700">Settings</li>
        </ul>
      </div>
      <div class="w-3/4 p-4">
        <h2 class="text-2xl font-bold">Welcome to the Dashboard</h2>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="bg-white p-4 shadow-md rounded-lg">Card 1</div>
          <div class="bg-white p-4 shadow-md rounded-lg">Card 2</div>
        </div>
        <table class="w-full mt-4">
          <thead>
            <tr>
              <th class="bg-gray-200 p-2">Name</th>
              <th class="bg-gray-200 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2">John Doe</td>
              <td class="p-2">john.doe@example.com</td>
            </tr>
            <tr>
              <td class="p-2">Jane Smith</td>
              <td class="p-"></td>
              <td class="p-2">jane.smith@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
