'use client';
import Image from 'next/image';

const uddoktaInfo = [
  {
    userId: 1,
    serial: '001',
    shopName: 'স্বপ্নের দোকান',
    uddokta: 'রাহুল ইসলাম',
    imageUrl: '/rahul.jpg',
    number: '01736933993',
  },
  {
    userId: 2,
    serial: '002',
    shopName: 'নতুন উদ্যোগ',
    uddokta: 'মাহফুজা আক্তার',
    imageUrl: '/mahfuza.jpg',
    number: '01736933993',
  },
];

const Uddokta = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📋 উদ্যোক্তা তালিকা</h1>

      {/* Table view for md+ screens */}
      <div className="xs:hidden md:block sm:block overflow-x-auto rounded-xl shadow">
        <table className="min-w-full table-auto bg-white">
          <thead>
            <tr className="bg-blue-100 text-gray-800 text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-3">সিরিয়াল</th>
              <th className="px-6 py-3">প্রোফাইল</th>
              <th className="px-6 py-3">দোকানের নাম</th>
              <th className="px-6 py-3">উদ্যোক্তা</th>
              <th className="px-6 py-3">মোবাইল</th>
             <th className="px-6 py-3">ঠিকানা</th>       
            </tr>
          </thead>
          <tbody>
            {uddoktaInfo.map((info, idx) => (
              <tr
                key={info.userId}
                className={idx % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}
              >
                <td className="px-6 py-4">{info.serial}</td>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                    <Image
                      src={info.imageUrl}
                      alt="উদ্যোক্তা"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{info.shopName}</td>
                <td className="px-6 py-4">{info.uddokta}</td>
                <td className="px-6 py-4">{info.number}</td>
                   <td className="px-6 py-3">ঠিকানা</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile screens */}
      <div className="md:hidden sm:hidden space-y-4">
        {uddoktaInfo.map((info) => (
          <div key={info.userId} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
              <Image
                src={info.imageUrl}
                alt="উদ্যোক্তা"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">সিরিয়াল: {info.serial}</p>
              <p className="font-bold text-gray-800">{info.shopName}</p>
              <p className="text-blue-600">{info.uddokta}</p>
              <p className="text-gray-600 text-sm">{info.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uddokta;
