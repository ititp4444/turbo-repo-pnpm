export default async function fetchUserData(ttt: string) {
    try {
        const res = await fetch(ttt, { next: { revalidate: 10 } })
        const result = await res.json()
        return result.name
    } catch {
        return ''
    }
}
