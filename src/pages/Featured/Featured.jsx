import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';




const Featured = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  const getFeatured = async () => {
    const res = await axios.get(`/get-feature`);
    return res;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeatured
  })


  if (isLoading) {
    return <Loading />
  }

  console.log(data)

  return (
    <div className='my-10 px-5'>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Blog Owner</th>
              <th>Title</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>

            {
              data.data.result.map((element, index) => (

                <tr key={element._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={element.userPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{element.userName}</div>

                      </div>
                    </div>
                  </td>
                  <td>{element.title}</td>
                  <th>
                    <button onClick={() => navigate(`/blog-details/${element._id}`)} className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>

              ))
            }

          </tbody>


        </table>
      </div>
    </div>
  )

}

export default Featured;
