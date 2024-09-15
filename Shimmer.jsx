import React from 'react';

const Shimmer = () => {
  return (
    <div>

      {/* Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className=' w-40'>
              <p className=' rounded-md shimmer header-cell p-3 m-3'></p>
            </th>
            <th >1
              <p className='rounded-md shimmer header-cell p-3 m-3'></p>
            </th>
            <th>
              <p className='rounded-md shimmer header-cell p-3 m-3'></p>
            </th>
            <th>
              <p className='rounded-md shimmer header-cell p-3 m-3'></p>
            </th>
            <th>
              <p className='rounded-md shimmer header-cell p-3 m-3'></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className='w-40'>
                <p className='rounded-md shimmer body-cell p-3 m-3'></p>
              </td>
              <td>
                <p className='rounded-md shimmer body-cell p-3 m-3'></p>
              </td>
              <td>
                <p className='rounded-md shimmer body-cell p-3 m-3'></p>
              </td>
              <td>
                <p className='rounded-md shimmer body-cell p-3 m-3'></p>
              </td>
              <td>
                <p className='rounded-md shimmer body-cell p-3 m-3'></p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shimmer;




