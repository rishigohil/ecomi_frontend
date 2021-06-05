import fetch from 'isomorphic-fetch'
import { API } from "../../config"
import queryString from 'query-string'

export const getStoreTotalRevenue = slug => {
    return fetch(`${API}/metrics/revenue/total`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}

export const getStoreHistoricalRevenue = () => {
    return fetch(`${API}/metrics/revenue`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}

export const getVeveMetrics = () => {
    return fetch(`${API}/metrics/veve`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}

export const getHeatMapData = () => {
    return fetch(`${API}/metrics/burns/heatmap`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}

export const getAllBurnData = () => {
    return fetch(`${API}/metrics/burns`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}

export const list = (offset, limit) => {
    const data = {
        limit,
        offset
    }
    return fetch(`${API}/collectibles`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log('Error is: ', err))
}
