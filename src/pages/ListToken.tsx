import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
type Props = {}

const ListToken = (props: Props) => {
    const [token,setToken] = useState<any>({});
    useEffect(() => {
        const getToken = async () => {
                const {data} = await axios.get("https://bufflikea.herokuapp.com/tokens/62dd1e8f489e4298068850f5");
                setToken(data)
        }
        getToken()
    }, [])
  return (
    <div>
         <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Sửa </th>
        
      </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>Token đã được ẩn</td>
        <td><NavLink className="btn btn-info" to={`/admin/edit`}>Sửa</NavLink></td>
        </tr>
      </tbody>
  </table>
    </div>
  )
}

export default ListToken