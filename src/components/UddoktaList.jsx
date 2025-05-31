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

const UddoktaList = () => {
  return (
    <div className="p-6">
      <h1 className="font-medium font-semibold text-2xl mb-6 bg-white text-blue-600 shadow-md p-4">📋 উদ্যোক্তা </h1>

      {/* Table view for md+ screens */}
      <div className="xs:block md:block sm:block overflow-x-auto rounded-xl shadow">
        <table className="min-w-full table-auto bg-white font-semibold font-md">
          <thead >
            <tr className="bg-white text-gray-800 text-left text-sm uppercase tracking-wider shadow-md">
              <th className="px-6 py-3">সিরিয়াল</th>
              <th className="px-6 py-3">প্রোফাইল</th>
              <th className="px-6 py-3">দোকানের নাম</th>
              <th className="px-6 py-3">উদ্যোক্তা</th>
              <th className="px-6 py-3">মোবাইল</th>
             <th className="px-6 py-3">ঠিকানা</th>       
            </tr>
          </thead>
          <tbody>
            {uddoktaInfo.map((info, idx) => (<tr
                key={info.userId} className="text-left text-sm uppercase tracking-wider shadow-md p-6">
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
    </div>
  );
};

export default UddoktaList;