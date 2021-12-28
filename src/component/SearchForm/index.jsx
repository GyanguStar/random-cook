import React, { useCallback } from 'react'
import { Form, InputNumber, Radio, Button } from 'antd'
import styles from './index.module.css'

const mealTimeOptions = [
	{ label: '早餐', value: 1 },
	{ label: '午餐', value: 2 },
	{ label: '晚餐', value: 4 },
	{ label: '宵夜', value: 8 },
]

const SearchForm = (props) => {
	// 此方法应当生成晚餐和食材
	const onFinish = useCallback((values) => {
		console.log(values)
	}, [])

	return (
		<Form
			layout="inline"
			name="searchForm"
			onFinish={onFinish}
            className={styles.searchForm}
		>
			<Form.Item name="numberOfDiners" label="人数">
				<InputNumber defaultValue={1} min={1} max={10} />
			</Form.Item>
			<Form.Item name="mealTime" label="饭点">
				<Radio.Group
					defaultValue={2}
					options={mealTimeOptions}
					optionType="button"
				/>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					生成晚餐
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SearchForm
