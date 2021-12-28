import React from 'react'
import {InputNumber, Table, } from 'antd'
import foodNameRender from './component/foodNameRender'

const dataSource = [
    {key: '0', foodName: '青椒炒土豆丝', quantity: 1, ingredients: '土豆，青椒，大蒜'},
    {key: '1', foodName: '青椒炒鸡蛋', quantity: 2, ingredients: '青椒，鸡蛋'}
]

const columns = [
    {
        title: '饭菜',
        dataIndex: 'foodName',
        key: 'foodName',
        render: (text, record, index) => {
            return foodNameRender({value: text, onRefresh: () => {}})
        }
    },
    {
        title: '数量',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text, record, index) => {
            const onChange = (value) => {
                record.quantity = value
            }
            return <InputNumber defaultValue={text} onChange={onChange} min={1} max={10} />
        }
    },
    {
        title: '食材',
        dataIndex: 'ingredients',
        key: 'ingredients',
    },
]

const FoodTable = () => {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    )
}

export default FoodTable
