import React from 'react'
import {Typography, Button} from 'antd'
import {SyncOutlined} from '@ant-design/icons'
import styles from './component.module.css'

const {Text} = Typography

const foodNameRender = (props) => {
    const {value, onRefresh} = props;

    return (
        <div className={styles.foodNameRender}>
            <Text strong>{value}</Text>
            <Button type='text' icon={<SyncOutlined />} onClick={onRefresh} />
        </div>
    )
}

export default foodNameRender
