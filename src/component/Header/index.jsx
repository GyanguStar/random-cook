import React from 'react'
import { PageHeader } from 'antd'
import styles from './index.module.css'

const Header = () => {
    return <PageHeader backIcon={false} title="不知饮食" className={styles.pageHeader} />
}

export default Header
