import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList = (props) =>
{
    const renderList = ({dataList}) => 
    {
        if (dataList != null)
        {
            return dataList.map((item) => {
                return 
                (
                    <Link to ={`/project/${item.id}`} key = {item.id}>
                        <div className='card col-md-2'>
                            <div className='row'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return (
        <div>
            {renderList(props)};
        </div>
    )
}

export default ProjectList;