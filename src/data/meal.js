const MEAL_TYPE = {
    0: "主食",
    1: "菜",
    2: "汤", 
    3: "套餐",
}

// const mealTimeOptions = [
// 	{ label: '早餐', value: 1 },
// 	{ label: '午餐', value: 2 },
// 	{ label: '晚餐', value: 4 },
// 	{ label: '宵夜', value: 8 },
// ]

const meal = [
    // 主食
    {name: '米饭', mealTime: 6, mealType: MEAL_TYPE[0], ingredient: ['大米']},
    {name: '馒头', mealTime: 6, mealType: MEAL_TYPE[0], ingredient: ['馒头']},

    // 菜
    {name: '青椒土豆丝', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['青椒', '土豆', '大蒜']},
    {name: '青椒肉丝', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['青椒', '里脊肉']},
    {name: '青椒炒蛋', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['青椒', '鸡蛋']},
    {name: '番茄炒蛋', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['番茄', '鸡蛋']},
    {name: '麻婆豆腐', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['豆腐', '牛里脊', '青蒜', '豆瓣酱', '豆豉', '辣椒粉', '花椒粉']},
    {name: '辣子鸡', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['干辣椒', '灯笼椒', '鸡腿肉', '芹菜']},
    {name: '蒜香包菜', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['包菜', '大蒜', '辣椒']},
    {name: '白菜炖粉条', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['白菜', '粉条', '豆腐']},
    {name: '小炒肉', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['青蒜', '猪后尖']},
    {name: '蒜苔炒香肠', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['香肠', '蒜苔']},
    {name: '清炒豆芽', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['豆芽', '干辣椒']},
    {name: '地三鲜', mealTime: 6, mealType: MEAL_TYPE[1], ingredient: ['青椒', '土豆', '茄子']},

    // 汤
    {name: '大米汤', mealTime: 8, mealType: MEAL_TYPE[2], ingredient: ['大米']},

    // 套餐
    {name: '炒饭', mealTime: 6, mealType: MEAL_TYPE[3], ingredient: ['熟米饭', '鸡蛋']},
    {name: '饺子', mealTime: 14, mealType: MEAL_TYPE[3], ingredient: ['饺子']},
    {name: '方便面', mealTime: 15, mealType: MEAL_TYPE[3], ingredient: ['方便面']},
    {name: '外卖', mealTime: 15, mealType: MEAL_TYPE[3], ingredient: ['外卖']},
    {name: '黄焖鸡', mealTime: 6, mealType: MEAL_TYPE[3], ingredient: ['鸡腿肉','土豆','青椒','香菇','葱', '姜','冰糖']},
    {name: '黑椒牛肉饭', mealTime: 6, mealType: MEAL_TYPE[3], ingredient: ['大米','土豆','牛肉卷','黑胡椒']},
    {name: '豆角焖面', mealTime: 6, mealType: MEAL_TYPE[3], ingredient: ['面条','土豆','豆角']},
];

export default meal;