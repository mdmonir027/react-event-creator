import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import style from './userInfo.module.css';
import { FaPencilAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('Monirul Islam');
  const [value, setValue] = useState('');

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      setName(value);
      setIsEdit(false);
    }
  };

  useEffect(() => setValue(name), [name]);

  return (
    <div>
      <div>
        <Row>
          <Col span={18}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Option</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Name</td>
                  <td className={style.username}>
                    {isEdit ? (
                      <input
                        className='ant-input'
                        type='text'
                        placeholder='Enter your sname'
                        style={{ width: '90%' }}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onKeyPress={keyDownHandler}
                      />
                    ) : (
                      <span>{name}</span>
                    )}
                    <div
                      className={style.icon}
                      onClick={() => setIsEdit((prev) => !prev)}
                    >
                      {isEdit ? <AiFillCloseCircle /> : <FaPencilAlt />}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Username</td>
                  <td>mdmonir027</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Emails</td>
                  <td>mmislam027@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserInfo;
