import React, { FC } from 'react'
import type { Metadata } from 'next'
import Header from '@pcm/ui/layout'
import Name from '../../../features/name/components/Name'

async function getPageData(id?: string) {
    try {
        //ISR
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { next: { revalidate: 10 } })
        //SSR
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { cache: 'no-store' })
        //SSG
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { next: { revalidate: 10 } })
        const result = await res.json()
        return result
    } catch (e) {
        console.log(e)
        return {}
    }
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    const poke = await getPageData(params.id)
    return {
        title: `ポケモン:${poke.name}`,
        description: `ディスクリプション:${poke.id}`
    }
}
export default async function Page({ params }: { params: { id: string } }) {
    const poke = await getPageData(params.id)
    return (
        <>
            <Header />
            <div>
                <h1>web SSR page</h1>
                <p>{poke?.name}</p>
                <img src={poke?.sprites?.front_default} alt='' />
                {poke.types.map((v: any, i: number) => {
                    return <Name key={`types_${i}`} ttt={v.type} />
                })}
            </div>
        </>
    )
}
