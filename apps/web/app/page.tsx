import Header from '@pcm/ui/layout'
import Button from '@pcm/ui/element'
import Link from 'next/link'
async function getIndex() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`, { cache: 'force-cache' })
        const result = await res.json()
        return result.results
    } catch (e) {
        console.log(e)
        return []
    }
}
export default async function Home() {
    const list = await getIndex()
    return (
        <>
            <Header />
            fdsfdsfs
            {list.map((v: any) => {
                return (
                    <li key={`key_${v.name}`}>
                        <Button>
                            <Link href={`/product/${v.name}`}>{v.name}</Link>
                        </Button>
                    </li>
                )
            })}
        </>
    )
}
