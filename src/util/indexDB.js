import meals from '../data/meal'

export function openMealDB() {
	const mealDBRequest = indexedDB.open('random-cook')

	mealDBRequest.onerror = function (event) {
		console.log('数据库打开报错')
	}

	mealDBRequest.onsuccess = function (event) {
		console.log('数据库打开成功')
		const db = mealDBRequest.result
		let mealOS = db.transaction(['meal'], 'readwrite').objectStore('meal');

		meals.forEach((item, index) => {
			const mealGet = mealOS.get(index)
			mealGet.onsuccess = (e) => {
				if(mealGet.result === undefined) {
					mealOS.add({id: index, ...item})
				}
				else {
					console.log('记录已存在: ' + item.name);
				}
			}
			mealGet.onerror = (e) => {
				console.error(e)
			}
		})

		mealOS.onsuccess = (e) => {
			console.log('meal添加数据记录成功')
		}

		mealOS.onerror = (e) => {
			console.log('meal添加数据记录失败')
		}
	}

	mealDBRequest.onupgradeneeded = function (event) {
		console.log('数据库升级事件')
		const db = event.target.result
		if (!db?.objectStoreNames?.contains('meal')) {
			db.createObjectStore('meal', { keyPath: 'id' })
		}
	}
}

export default openMealDB

// function initMealDB (db) {
//     console.log(meals);
//     const initRequest = db.transaction()
// }
