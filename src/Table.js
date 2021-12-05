export const Table = () => {
  return (
    <table class="table-auto w-full">
      <thead class="text-xs font-semibold uppercase text-gray-400">
        <tr>
          <th class="p-2 whitespace-nowrap w-64">
            <div class="font-semibold text-left">Name</div>
          </th>
          <th class="p-2 whitespace-nowrap w-64">
            <div class="font-semibold text-left">Email</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Spent</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-center">Country</div>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm divide-y divide-gray-100">
        <tr className="h-20">
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  class="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                  width="40"
                  height="40"
                  alt="Alex Shatov"
                />
              </div>
              <div class="font-medium text-white-800">Ahmed McGarry</div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">alexshatov@gmail.com</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">$2,890.66</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">🇺🇸</div>
          </td>
        </tr>
        <tr className="h-20">
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  class="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                  width="40"
                  height="40"
                  alt="Philip Harbach"
                />
              </div>
              <div class="font-medium text-white-800">Rohan Bedi </div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">philip.h@gmail.com</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">$2,767.04</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">🇩🇪</div>
          </td>
        </tr>
        <tr className="h-20">
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  class="rounded-full"
                  src="https://i.pravatar.cc/150?img=49"
                  width="40"
                  height="40"
                  alt="Mirko Fisuk"
                />
              </div>
              <div class="font-medium text-white-800">Andy Bolton</div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">mirkofisuk@gmail.com</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">$2,996.00</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">🇫🇷</div>
          </td>
        </tr>
        <tr className="h-20">
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  class="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                  width="40"
                  height="40"
                  alt="Olga Semklo"
                />
              </div>
              <div class="font-medium text-white-800">James Arnold</div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">olga.s@cool.design</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">$1,220.66</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">🇮🇹</div>
          </td>
        </tr>
        <tr className="h-20">
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  class="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                  width="40"
                  height="40"
                  alt="Burak Long"
                />
              </div>
              <div class="font-medium text-white-800">Jane Christian</div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">longburak@gmail.com</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">$1,890.66</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">🇬🇧</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
