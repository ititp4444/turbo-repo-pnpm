import React, { FC } from 'react'
import fetchUserData from '../api'
const Name = async (props: { ttt: { name: string; url: string } }) => {
    const { ttt } = props
    const poketype = await fetchUserData(ttt.url)
    return (
        <>
            <div>{poketype}</div>
        </>
    )
}
export default Name
