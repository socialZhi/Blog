import request from './request'

export function testApi(data) {
    return request({
        method: 'post',
        url: '/postSome',
        data
    })
}