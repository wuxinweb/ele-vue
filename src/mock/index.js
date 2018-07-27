// 使用 Mock
import Mock from 'mockjs'
import V2 from './v2.json'
Mock.mock(/\/api\/shopevaluate\/([0-9]+)/, (req, res) => {
    return {
        ...V2.rst
    }
})
Mock.mock(/\/api\/shopinfo\/([0-9]+)/, (req, res) => {
    return {
        ...V2.rst
    }
})
Mock.mock(/\/api\/shopFoodList\/([0-9]+)/, (req, res) => {
    return {
        ...V2.menu
    }
})
Mock.mock(/\/api\/shoppingCart\/([0-9]+)/, (req, res) => {
    return {
        ...V2.bought_list
    }
})